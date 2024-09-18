import { Box, createTheme, ThemeProvider, Typography } from '@mui/material';

function App() {
  const myTheme = createTheme({
    typography: {
      h1: {
        fontSize: 48,
        color: 'red',
      },
      h2: {
        fontSize: 36,
        color: 'blue',
      }
    },
  });

  return (
    <Box>

      {/* variantでMUI標準のカテゴリを指定 */}
      <Box sx={{ margin: 1, padding: 1, border: 'solid 1px #000000' }}>
        <Typography variant='h1'>h1</Typography>
        <Typography variant='h2'>h2</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='body1'>body1</Typography>
        <Typography variant='caption'>caption</Typography>
      </Box>

      {/* componentでDOMの種類を指定 */}
      <Box sx={{ margin: 1, padding: 1, border: 'solid 1px #000000' }}>
        {/* デフォルトはdivなのでblock要素で改行されて表示される */}
        <Typography variant='body1'>div body</Typography>
        <Typography variant='body1'>div body</Typography>

        {/* spanはinline要素なので横並びで表示される */}
        <Typography variant='body1' component='span'>default body</Typography>
        <Typography variant='body1' component='span'>default body</Typography>

        <br />

        {/* <a>タグの場合 */}
        <Typography variant='body1' component='a' href='/'>default body</Typography>
      </Box>

      {/* themeでカスタムテーマを指定 */}
      <ThemeProvider theme={myTheme}>
        <Box sx={{ margin: 1, padding: 1, border: 'solid 1px #000000' }}>
          <Typography variant='h1'>h1</Typography>
          <Typography variant='h2'>h2</Typography>
        </Box>
      </ThemeProvider>

    </Box>
  );
}

export default App;
