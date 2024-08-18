import Link from 'next/link';
import styles from './Header.module.css'
import { Box } from '@mui/material';
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
    return (
        <header className={styles.header}>

            {/* md, medium: 900px 以上のとき表示 */}
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <nav className={styles['desktop-nav']}>
                    {['home', 'services', 'resume', 'work', 'contact'].map((link, index) => {
                        return (
                            <Link key={index} href="/">{link}</Link>
                        );
                    })}
                </nav>
            </Box>

            {/* sm, small: 600px 以下のとき表示 */}
            <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                <nav className={styles['mobile-nav']}>
                    <CiMenuFries />
                </nav>
            </Box>

        </header>
    );
};

export default Header;