"use client";

import ComponentHeader from "@/app/components/componentHeader";
import { formatDateToShortMonth, getStatusColor } from "@/app/utils/util";
import { Button, Card, Chip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment } from "react";
import DataTable from "../../../dashboard/components/dataTable";

export interface Organization {
    organizationID: string;
    organizationName: string;
    organizationType: string;
    status: string;
    location: string;
    lastUpdatedOn: string
}

const organizations: Organization[] = [
    {
        organizationID: "ORG001",
        organizationName: "Sunrise Health",
        organizationType: "Hospital",
        status: "Active",
        location: "New York",
        lastUpdatedOn: "2024-05-10",
    },
    {
        organizationID: "ORG002",
        organizationName: "Green Valley Clinic",
        organizationType: "Clinic",
        status: "Inactive",
        location: "California",
        lastUpdatedOn: "2024-04-18",
    },
    {
        organizationID: "ORG003",
        organizationName: "Lakeside Medical",
        organizationType: "Hospital",
        status: "Active",
        location: "Texas",
        lastUpdatedOn: "2024-03-22",
    },
    {
        organizationID: "ORG004",
        organizationName: "Wellness Center",
        organizationType: "Wellness Center",
        status: "Pending",
        location: "Florida",
        lastUpdatedOn: "2024-05-01",
    },
    {
        organizationID: "ORG005",
        organizationName: "Canyon Hospital",
        organizationType: "Hospital",
        status: "Active",
        location: "Arizona",
        lastUpdatedOn: "2024-05-12",
    },
];

function OrganizationListing() {

    const columns: GridColDef[] = [
        { field: 'organizationName', headerName: 'Facility Name', flex: 1 },
        { field: 'organizationType', headerName: 'Type', flex: 1 },
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
        { field: 'location', headerName: 'Location', flex: 1 },
        { 
            field: 'lastUpdatedOn', 
            headerName: 'Last Updated on', 
            flex: 1, 
            valueFormatter: formatDateToShortMonth
        },
    ]

    return (
        <Card sx={{ p: 4, flex: 1 }}>
            <ComponentHeader pageName={"Organization Listing"} actions={
                <Fragment>
                    <Button href="/add-organization" variant="contained">Add Organization</Button>
                </Fragment>
            } />

            <DataTable tableRows={organizations} columns={columns} />
        </Card>
    )
}

export default OrganizationListing