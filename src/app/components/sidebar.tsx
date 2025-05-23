// components/ResponsiveSidebar.tsx
"use client";

import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  People as PeopleIcon,
  Schedule as ScheduleIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const drawerWidth = 240;

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "Manage Facility", icon: <SettingsIcon />, href: "/facility" },
  { label: "Manage Resources", icon: <PeopleIcon />, href: "/resources" },
  { label: "Schedule Preferences", icon: <ScheduleIcon />, href: "/schedule" },
];

export default function ResponsiveSidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setOpen(!open);
    }
  };

  const drawerContent = (
    <Box>
      <Box
        display="flex"
        justifyContent={open ? "flex-end" : "center"}
        alignItems="center"
        p={1}
      >
        <IconButton onClick={handleDrawerToggle}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href} passHref>
            <ListItemButton
              sx={{
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.label} />}
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      {/* AppBar for mobile toggle */}
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            App Title
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Responsive Drawer */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: open ? drawerWidth : 60,
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

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // space for AppBar
          width: "100%",
        }}
      >
        <Typography variant="h6">Main Content Goes Here</Typography>
      </Box>
    </Box>
  );
}