use std::fs::File;
use std::io::{self, Read, Write};

#[derive(Debug)]
struct Header {
    magic_number: [u8; 4],
    width: u32,
    height: u32,
    color_depth: u8,
}

#[derive(Debug)]                                                
struct Image {
    header: Header,
    pixel_data: Vec<u8>,
}

impl Image {
    fn new(width: u32, height: u32, color_depth: u8, pixel_data: Vec<u8>) -> Image {
        Image {
            header: Header {
                magic_number: [0x52, 0x55, 0x52, 0x54],
                width,
                height,
                color_depth,
            },
            pixel_data,
        }
    }

    fn from_file(mut file: File) -> io::Result<Image> {
        let mut header_buf = [0u8; 13];
        file.read_exact(&mut header_buf)?;
        let header = Header {
            magic_number: [header_buf[0], header_buf[1], header_buf[2], header_buf[3]],
            width: u32::from_le_bytes([header_buf[4], header_buf[5], header_buf[6], header_buf[7]]),
            height: u32::from_le_bytes([header_buf[8], header_buf[9], header_buf[10], header_buf[11]]),
            color_depth: header_buf[12],
        };
        
        let pixel_data_size = (header.width * header.height * header.color_depth as u32 / 8) as usize;
        let mut pixel_data = vec![0u8; pixel_data_size];
        file.read_exact(&mut pixel_data)?;

        Ok(Image { header, pixel_data })
    }

    fn to_file(&self, mut file: File) -> io::Result<()> {
        let width_bytes = self.header.width.to_le_bytes();
        let height_bytes = self.header.height.to_le_bytes();
        let header_buf = [
            self.header.magic_number[0],
            self.header.magic_number[1],
            self.header.magic_number[2],
            self.header.magic_number[3],
            width_bytes[0],
            width_bytes[1],
            width_bytes[2],
            width_bytes[3],
            height_bytes[0],
            height_bytes[1],
            height_bytes[2],
            height_bytes[3],
            self.header.color_depth,
        ];
        file.write_all(&header_buf)?;
        file.write_all(&self.pixel_data)?;

        Ok(())
    }
}

fn main() -> io::Result<()> {
    // 画像を生成
    let width = 2;
    let height = 2;
    let color_depth = 24; // 24bit color
    let pixel_data = vec![
        255, 0, 0, // Red
        0, 255, 0, // Green
        0, 0, 255, // Blue
        255, 255, 0, // White
    ];
    let img = Image::new(width, height, color_depth, pixel_data);

    // 画像を書きこむ
    let file = File::create("test.rustimg")?;
    img.to_file(file)?;

    // 画像を読み込む
    let file = File::open("test.rustimg")?;
    let read_img = Image::from_file(file)?;

    println!("{:?}", read_img);

    Ok(())
}