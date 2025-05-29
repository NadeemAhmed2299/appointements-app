"use client";

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";

import {
  AppBar,
  Avatar,
  Box,
  Chip,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme
} from "@mui/material";
import { useState } from "react";
import { useSidebar } from "../contexts/sidebarContext";
import Image from "next/image";
import { drawer } from "../svg";

type HeaderProps = {
  children?: React.ReactNode;
  pillLabel?: string;
  userRole?: "Organization" | "User" | "System Admin" | "Facility";
};


function Header({ children, pillLabel, userRole = "User" }: HeaderProps) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { toggleSidebar } = useSidebar();
  const accountName = "John Doe";

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getPillColor = () => {
    switch (userRole) {
      case "Organization":
        return "primary";
      case "System Admin":
        return "secondary";
      case "User":
        return "secondary";
      default:
        return "success";
    }
  };

  return (
    <AppBar
      position="fixed"
      variant="outlined"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "#fff",
        boxShadow: 0.25,
      }}
    >

      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <Image src={drawer} alt="logo" width={24} height={24} />
        </IconButton>

        <Box flexGrow={1}>{children}</Box>

        <Box display="flex" alignItems="center" gap={2} p={0}
          sx={{
            '@media (min-width:768px)': {
              px: '2em',
            },
          }}>
          <Box display={{ xs: 'none', sm: 'flex' }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </Box>

          {pillLabel && (
            <Box display={{ xs: 'none', sm: 'flex' }}>
              <Chip
                label={pillLabel}
                color={getPillColor()}
                size="small"
                sx={{ fontWeight: 500, borderRadius: '4px' }}
              />
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box>
              <IconButton onClick={handleMenuOpen}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  {accountName.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                disableScrollLock
              >
                <MenuItem disabled>{accountName}</MenuItem>
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>

                <Box display={{ xs: 'flex', sm: 'none' }} flexDirection="column">
                  <MenuItem onClick={handleMenuClose}>Notifications</MenuItem>
                </Box>
              </Menu>
            </Box>

            <Box display={{ xs: 'none', sm: 'flex' }} flexDirection="column">
              <Typography m={0} fontSize={'14px'}>{accountName}</Typography>
              <Typography m={0} fontSize={'12px'} sx={{ color: '#565656' }} variant="body2">{userRole}</Typography>
            </Box>

            <Box>
              <IconButton
                size="small"
                color="primary"
                onClick={handleMenuOpen}
              >
                <KeyboardArrowDownIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;