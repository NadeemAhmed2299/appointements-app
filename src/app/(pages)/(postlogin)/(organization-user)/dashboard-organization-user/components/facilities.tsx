"use client";

import ComponentHeader from "@/app/components/componentHeader";
import { getStatusColor } from "@/app/utils/util";
import { Button, Card, Chip } from "@mui/material";
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment } from "react";

export interface FacilityUsage {
    name: string;
    location: string;
    treatment: string;
    usage: string;
    status: string;
}

const rows: Array<FacilityUsage> = [
    {
        name: "Sunrise Health",
        location: "New York, NY",
        treatment: "Chemotherapy",
        usage: "72%",
        status: "Active",
    },
    {
        name: "Green Valley Clinic",
        location: "Austin, TX",
        treatment: "Radiation Therapy",
        usage: "65%",
        status: "Inactive",
    },
    {
        name: "Lakeside Medical",
        location: "Chicago, IL",
        treatment: "Immunotherapy",
        usage: "89%",
        status: "Active",
    },
    {
        name: "Wellness Center",
        location: "San Diego, CA",
        treatment: "Hormone Therapy",
        usage: "54%",
        status: "Pending",
    },
    {
        name: "Canyon Hospital",
        location: "Denver, CO",
        treatment: "Surgery",
        usage: "78%",
        status: "Active",
    },
];

function Facility() {

    const columns = [
        { field: 'name', headerName: 'Facility Name', flex: 1 },
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'treatment', headerName: 'Treatment', flex: 1 },
        { field: 'usage', headerName: 'Resource Usage', flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <Chip label={params.value} color={getStatusColor(params.value)} size="small" />
            ),
        },
    ]

    return (
        <Card sx={{ p: 4, flex: 1 }}>
            <ComponentHeader pageName={"Cancer Center Overview"} actions={
                <Fragment>
                    <Button variant="contained" sx={{ fontWeight: 400 }}>Add Facility</Button>
                </Fragment>
            } />

            <DataGrid
                rows={rows.map((row, index) => ({ id: index, ...row }))}
                columns={columns}
            />
        </Card>
    )
}

export default Facility