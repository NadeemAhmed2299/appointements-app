"use client";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RefreshIcon from "@mui/icons-material/Refresh";
import { Box, Button, Card, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent } from 'react';
import GrowingTextField from './growingTextField';

function FilterUI() {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
        const { name, value } = event.target;
        console.log(`${name || "input"} changed to:`, value);
    };

    return (
        <Card variant="outlined" sx={{ display: "inline-flex", alignItems: "center", padding: 0, gap: 1, border: '1px solid', borderColor: 'grey.300' }}>
            <Box sx={{ py: 1, px: 2, borderRight: '1px solid #ddd', height: '100%', display: 'flex', alignItems: 'center' }}>
                <FilterAltOutlinedIcon />
            </Box>
            <Box sx={{ py: 1, px: 2, height: '100%' }}>
                <Typography variant="subtitle2">Filter By</Typography>
            </Box>
            <Box sx={{ py: 1, px: 2, borderRight: '1px solid #ddd', borderLeft: '1px solid #ddd', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <GrowingTextField placeholder="Search..." onChange={handleInputChange} name="search" />

                <FormControl sx={{ minWidth: '80px' }} size="small">
                    <Select
                        defaultValue=""
                        displayEmpty
                        name="status"
                        onChange={handleInputChange}
                        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
                    >
                        <MenuItem value="" disabled>
                            Status
                        </MenuItem>
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inActive">InActive</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ py: 1, px: 2, height: '100%' }}>
                <Button startIcon={<RefreshIcon />} >
                    Reset Filter
                </Button>
            </Box>
        </Card>
    )
}

export default FilterUI