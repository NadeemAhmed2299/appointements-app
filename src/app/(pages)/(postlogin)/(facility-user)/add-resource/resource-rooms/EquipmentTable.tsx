"use client";

import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

interface Equipment {
  id: number;
  name: string;
  status: boolean;
  checked: boolean;
}

const initialEquipments: Equipment[] = [
  {
    id: 1,
    name: "Linear Accelerator",
    status: true,
    checked: true,
  },
  {
    id: 2,
    name: "Patient Positioning System",
    status: true,
    checked: true,
  },
];

export default function EquipmentTable() {
  const [equipments, setEquipments] = useState<Equipment[]>(initialEquipments);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuRowIndex, setMenuRowIndex] = useState<number | null>(null);

  const handleCheckboxChange = (id: number) => {
    setEquipments((prev) =>
      prev.map((eq) =>
        eq.id === id ? { ...eq, checked: !eq.checked } : eq
      )
    );
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setMenuRowIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuRowIndex(null);
  };

  const handleAddEquipment = () => {
    const newEquipment: Equipment = {
      id: equipments.length + 1,
      name: `Equipment ${equipments.length + 1}`,
      status: true,
      checked: false,
    };
    setEquipments([...equipments, newEquipment]);
  };

  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f4f8" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  disabled
                  sx={{ color: "#ccc" }}
                />
              </TableCell>
              <TableCell><strong>Equipment Name</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {equipments.map((equipment, index) => (
              <TableRow key={equipment.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={equipment.checked}
                    onChange={() => handleCheckboxChange(equipment.id)}
                    color="primary"
                  />
                </TableCell>
                <TableCell>{equipment.name}</TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircleIcon sx={{ color: "#8e44ad", fontSize: 20 }} />
                    <Typography>Yes</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreVertIcon />
                  </IconButton>
                  {menuRowIndex === index && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => alert("Edit action")}>Edit</MenuItem>
                      <MenuItem onClick={() => alert("Delete action")}>Delete</MenuItem>
                    </Menu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Button variant="outlined" color="primary" onClick={handleAddEquipment}>
          Add Equipment
        </Button>
      </Box>
    </Box>
  );
}
