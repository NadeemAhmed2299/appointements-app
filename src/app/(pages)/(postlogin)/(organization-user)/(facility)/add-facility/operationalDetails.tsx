"use client";

import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuList,
  MenuItem as DropdownItem,
  Stack,
} from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface DayEntry {
  day: string;
  openingTime: string;
  closingTime: string;
  isAMOpen: boolean;
  isAMClose: boolean;
}

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function OperationalDetails() {
  const [day, setDay] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [amOpen, setAmOpen] = useState(true);
  const [amClose, setAmClose] = useState(true);
  const [entries, setEntries] = useState<DayEntry[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuRowIndex, setMenuRowIndex] = useState<number | null>(null);

  const handleAdd = () => {
    setEntries([
      ...entries,
      { day, openingTime, closingTime, isAMOpen: amOpen, isAMClose: amClose },
    ]);
    setDay("");
    setOpeningTime("");
    setClosingTime("");
    setAmOpen(true);
    setAmClose(true);
  };

  const handleDelete = (index: number) => {
    setEntries(entries.filter((_, i) => i !== index));
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setMenuRowIndex(index);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Operational Details
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 4 }}>
          <Select fullWidth value={day} onChange={(e) => setDay(e.target.value)} displayEmpty>
            <MenuItem value="" disabled>Select</MenuItem>
            {daysOfWeek.map((d) => (
              <MenuItem key={d} value={d}>{d}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            type="time"
            fullWidth
            value={openingTime}
            onChange={(e) => setOpeningTime(e.target.value)}
            label="Opening Time"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            type="time"
            fullWidth
            value={closingTime}
            onChange={(e) => setClosingTime(e.target.value)}
            label="Closing Time"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>
      <Stack sx={{ mt: 2 }} direction="row" spacing={2}>
          <Button onClick={handleAdd} variant="outlined" color="primary">
              Add Day
          </Button>
      </Stack>

      <TableContainer component={Paper} sx={{ mt: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f0f4f8" }}>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Opening Time</TableCell>
              <TableCell>Closing Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.day}</TableCell>
                <TableCell>{entry.openingTime} {entry.isAMOpen ? "AM" : "PM"}</TableCell>
                <TableCell>{entry.closingTime} {entry.isAMClose ? "AM" : "PM"}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreVertIcon />
                  </IconButton>
                  {menuRowIndex === index && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(null)}
                    >
                      <MenuList>
                        <DropdownItem onClick={() => alert("Edit not implemented")}>Edit</DropdownItem>
                        <DropdownItem onClick={() => handleDelete(index)}>Delete</DropdownItem>
                      </MenuList>
                    </Menu>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {entries.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography variant="body2" color="textSecondary">
                    No operational days added
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
