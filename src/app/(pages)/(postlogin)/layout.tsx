// app/layouts/MainLayout.tsx
"use client";

import { useSidebar } from "@/app/contexts/sidebarContext";
import { ChevronLeft, Menu } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routeList } from "./routeList";

const drawerWidth = 240;

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { toggleSidebar, mobileOpen, isSidebarOpen } = useSidebar();

    const drawerContent = (
        <Box>
            <Box
                display="flex"
                justifyContent={isSidebarOpen ? "flex-end" : "center"}
                alignItems="center"
                p={1}
            >
                <IconButton onClick={toggleSidebar}>
                    {isSidebarOpen ? <ChevronLeft /> : <Menu />}
                </IconButton>
            </Box>
            <Divider />
            <List>
                {routeList.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.label} href={item.href}>
                            <ListItemButton
                                selected={isActive}
                                sx={{
                                    justifyContent: isSidebarOpen ? "initial" : "center",
                                    minHeight: 48,
                                    px: 2,
                                    my: 1,
                                    borderLeft: isActive
                                        ? `4px solid ${theme.palette.primary.main}`
                                        : "4px solid transparent",
                                    color: isActive ? theme.palette.primary.main : "inherit",
                                    "&:hover": {
                                        backgroundColor: "action.hover",
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: isSidebarOpen ? 2 : "auto",
                                        justifyContent: "center",
                                        color: isActive ? theme.palette.primary.main : "inherit",
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                {isSidebarOpen && <ListItemText primary={item.label} />}
                            </ListItemButton>
                        </Link>
                    );
                })}
            </List>
        </Box>
    );

    return (
        <Box display="flex">
            <Drawer
                variant={isMobile ? "temporary" : "permanent"}
                open={isMobile ? mobileOpen : isSidebarOpen}
                onClose={toggleSidebar}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: isSidebarOpen ? drawerWidth : 60,
                        overflowX: "hidden",
                        transition: theme.transitions.create("width", {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                        boxSizing: "border-box",
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    mt: 8,
                    transition: theme.transitions.create(["margin", "width"], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                    ml: isMobile ? 0 : (isSidebarOpen ? `${drawerWidth}px` : "60px"),
                }}
            >
                {children}
            </Box>
        </Box>
    );
}