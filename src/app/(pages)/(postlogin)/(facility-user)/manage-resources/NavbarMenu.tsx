"use client";

import React from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  text: string;
  link: string;
}

const navLinks: NavLink[] = [
  { text: 'Rooms', link: '/manage-resources/resource-rooms' },
  { text: 'Clinical Personnel', link: '/manage-resources/clinical-personnel' },
  { text: 'Equipment', link: '/manage-resources/resource-equipments' },
];

const NavbarMenu = () => {
  const theme = useTheme();
  const pathname = usePathname(); // Get current path
  return (
    <AppBar position="static" color="secondary" sx={{ boxShadow: 'none', backgroundColor: '#fff', borderRadius: '12px', mt: 2, mb: 2 }}>
      <Container maxWidth="lg" sx={{ borderRadius: 6, m: 0 }}>
        <Toolbar disableGutters>
          <Box display="flex" gap={2}>
            {navLinks.map((item, index) => {
              const isActive = pathname === item.link;

              return (
                <Link key={index} href={item.link} passHref>
                  <Button
                    sx={{
                      color: isActive ? theme.palette.primary.main : 'inherit',
                      fontWeight: isActive ? 700 : 400,
                      borderBottom: isActive ? `2px solid ${theme.palette.primary.main}` : 'none',
                      borderRadius: 0,
                      paddingBottom: '6px',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        borderBottom: `2px solid ${theme.palette.primary.main}`,
                        backgroundColor: 'transparent',
                        textDecoration: 'none',
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavbarMenu;
