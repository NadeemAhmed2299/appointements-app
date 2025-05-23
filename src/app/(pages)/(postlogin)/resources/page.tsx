

﻿"use client";

import Header from "@/app/components/header";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  IconButton, Menu, MenuItem,
  Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography
} from "@mui/material";
import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "John Doe", address: "123 Main St", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", address: "456 Oak Ave", phone: "987-654-3210" },
];

const ManageResourcesPage = () => {
  const [anchorEls, setAnchorEls] = React.useState<{ [key: number]: HTMLElement | null }>({});

  const handleClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEls((prev) => ({ ...prev, [id]: event.currentTarget }));
  };

  const handleClose = (id: number) => {
    setAnchorEls((prev) => ({ ...prev, [id]: null }));
  };

  return (
    <>
      <Header />
      <Typography variant="h5" component="h1" gutterBottom>
        Manage Resources
      </Typography>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Profile</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>
                <Link href={`/profile/${row.id}`} passHref>
                  <Button variant="outlined" size="small">Profile</Button>
                </Link>
              </TableCell>
              <TableCell>
                <IconButton onClick={(e) => handleClick(e, row.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEls[row.id]}
                  open={Boolean(anchorEls[row.id])}
                  onClose={() => handleClose(row.id)}
                >
                  <MenuItem onClick={() => handleClose(row.id)}>Edit</MenuItem>
                  <MenuItem onClick={() => handleClose(row.id)}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ManageResourcesPage;