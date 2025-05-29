"use client";

import { ActionMenu } from "@/app/components/actionMenu";
import ComponentHeader from "@/app/components/componentHeader";
import { getStatusColor } from "@/app/utils/util";
import { Button, Card, Chip } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment } from "react";

export interface facilityUser {
    name: string;
    email: string;
    status: string;
    dateAdded: string;
    lastUpdatedOn: string;
}

const rows: Array<facilityUser> = [
    {
        name: "Sunrise Health",
        email: "contact@sunrisehealth.com",
        status: "Active",
        dateAdded: "2024-01-15",
        lastUpdatedOn: "2024-05-10",
    },
    {
        name: "Green Valley Clinic",
        email: "info@greenvalleyclinic.com",
        status: "Inactive",
        dateAdded: "2024-02-20",
        lastUpdatedOn: "2024-04-18",
    },
    {
        name: "Lakeside Medical",
        email: "support@lakesidemedical.com",
        status: "Active",
        dateAdded: "2023-11-05",
        lastUpdatedOn: "2024-03-22",
    },
    {
        name: "Wellness Center",
        email: "hello@wellnesscenter.com",
        status: "Pending",
        dateAdded: "2024-03-10",
        lastUpdatedOn: "2024-05-01",
    },
    {
        name: "Canyon Hospital",
        email: "admin@canyonhospital.com",
        status: "Active",
        dateAdded: "2024-04-01",
        lastUpdatedOn: "2024-05-12",
    },
];

function FacilityListing() {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Facility Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            align: 'center',
            headerAlign: 'center',
            renderCell: (params: GridRenderCellParams) => (
                <Chip label={params.value} color={getStatusColor(params.value)} size="small" />
            ),
        },
        { field: 'dateAdded', headerName: 'Date Added', flex: 1 },
        { field: 'dateModified', headerName: 'Last Updated on', flex: 1 },
        {
            field: 'actions',
            headerName: 'Action(s)',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <ActionMenu />,
        },
    ]

    return (
        <Card sx={{ p: 4, flex: 1 }}>
            <ComponentHeader pageName={"Facility Listing"} actions={
                <Fragment>
                    <Button href="/add-facility" variant="contained">Add Facility</Button>
                </Fragment>
            } />

            <DataGrid
                rows={rows.map((row, index) => ({ id: index, ...row }))}
                columns={columns}
            />
        </Card>
    )
}

export default FacilityListing