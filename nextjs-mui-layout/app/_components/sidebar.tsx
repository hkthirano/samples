"use client";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

type MenuItem = {
    name: string;
    url: string;
    icon: React.ReactNode;
};
const menuList: MenuItem[] = [
    { name: "Inbox", url: "/", icon: <InboxIcon /> },
    { name: "Starred", url: "/starred", icon: <MailIcon /> },
];

const SideBar = () => {
    const pathname = usePathname();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {menuList.map(({ name, url, icon }: MenuItem) => (
                        <ListItem key={name} disablePadding>
                            <ListItemButton selected={pathname === url}>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <Link href={url}>
                                    {name}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
};

export default SideBar;