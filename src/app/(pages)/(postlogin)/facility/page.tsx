"use client";

import { AppBar, IconButton, Toolbar, Typography, useTheme } from "@mui/material";

import { useSidebar } from "@/app/contexts/sidebarContext";
import { Menu as MenuIcon } from "@mui/icons-material";

function Page() {
    const theme = useTheme();
    const { toggleSidebar } = useSidebar();

    return (
        <div>
            <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleSidebar}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Facility
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Page