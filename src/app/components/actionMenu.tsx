"use client"

import { IconButton, Menu, MenuItem } from "@mui/material";
import { GridMoreVertIcon } from "@mui/x-data-grid";
import { useState } from "react";

export const ActionMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <GridMoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => { handleClose(); console.log('Edit clicked'); }}>
                    Edit
                </MenuItem>
                <MenuItem onClick={() => { handleClose(); console.log('Delete clicked'); }}>
                    Delete
                </MenuItem>
            </Menu>
        </>
    );
};
