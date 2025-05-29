"use client";

import { ActionMenu } from "@/app/components/actionMenu";
import ComponentHeader from "@/app/components/componentHeader";
import { getStatusColor } from "@/app/utils/util";
import { Button, Card, Chip } from "@mui/material";
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment } from "react";

export interface OrganizationUsage {
    name: string;
    facilities: number;
    status: string;
    lastUpdated: string;
}

const rows: OrganizationUsage[] = [
    {
        name: "Metro Care",
        facilities: 12,
        status: "Active",
        lastUpdated: "2 hours ago"
    },
    {
        name: "Sunshine Health",
        facilities: 8,
        status: "Active",
        lastUpdated: "1 day ago"
    },
    {
        name: "Unity Healthcare",
        facilities: 15,
        status: "Active",
        lastUpdated: "3 days ago"
    },
];

function Organizations() {

    const columns = [
        { field: 'name', headerName: 'Organization Name', flex: 1 },
        { field: 'facilities', headerName: 'Facilities', flex: 1 },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <Chip label={params.value} color={getStatusColor(params.value)} size="small" />
            ),
        },
        { field: 'lastUpdated', headerName: 'Last updated on', flex: 1 },
        {
            field: 'actions',
            headerName: 'Action(s)',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <ActionMenu />,
        },
    ]

    return (
        <Card sx={{ p: 4, flex: 1, height: '100%'  }}>
            <ComponentHeader pageName={"Cancer Center Overview"} actions={
                <Fragment>
                    <Button variant="contained" sx={{ fontWeight: 400 }}>Add Facility</Button>
                </Fragment>
            } />

            <DataGrid
                rows={rows.map((row, index) => ({ id: index, ...row }))}
                columns={columns}      
                hideFooterPagination        
            />
        </Card>
    )
}

export default Organizations