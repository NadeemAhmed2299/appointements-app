"use client";

import { ActionMenu } from "@/app/components/actionMenu";
import ComponentHeader from "@/app/components/componentHeader";
import DataTable from "@/app/components/dataTable";
import { getStatusColor } from "@/app/utils/util";
import { Button, Card, Chip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment, useEffect, useState } from "react";

export interface ClinicalPersonnel {
    clinicalPersonnelID: string;
    clinicalPersonnelName: string;
    resourceType: string;
    department: string;
    contact: string;
    address: string;
    status: string;
}

const clinicalPersonnel: ClinicalPersonnel[] = [
    {
        clinicalPersonnelID: "EMP001",
        clinicalPersonnelName: "Sarah Johnson",
        resourceType: "Radiation Oncologists - Medical Staff",
        department: "Radiation Oncology",
        contact: "sarah.johnson@hospital.com (555) 123-4567",
        address: "123 Medical Center Dr, Healthcare City, HC 12345",
        status: "Active",
    },
    {
        clinicalPersonnelID: "EMP002",
        clinicalPersonnelName: "Michael Chen",
        resourceType: "Oncology Nurses - Nursing Staff",
        department: "Medical Oncology",
        contact: "michael.chen@hospital.com (555) 123-4567",
        address: "456 Healthcare Ave, Med City, MC 54321",
        status: "Active",
    },
    {
        clinicalPersonnelID: "EMP003",
        clinicalPersonnelName: "Lisa Rodriguez",
        resourceType: "Medical Physicists - Allied Health Professionals",
        department: "Radiation Oncology",
        contact: "lisa.rodriguez@hospital.com (555) 123-4567",
        address: "789 Hospital Blvd, Care Town, CT 98765",
        status: "Active",
    },
];

function ClinicalPersonelListing() {

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'clinicalPersonnelName',
            headerName: 'Name',
            flex: 1,
        },
        {
            field: 'resourceType',
            headerName: 'Resource Type',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => (
                <div style={{ whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.4' }}>
                    {params.value}
                </div>
            )
        }
        ,
        { field: 'department', headerName: 'Department', flex: 1 },
        {
            field: 'contact',
            headerName: 'Contact',
            flex: 1,
        },
        { field: 'address', headerName: 'Address', flex: 1 },
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
        {
            field: 'actions',
            headerName: 'Action(s)',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <ActionMenu />,
        },
    ]

    return (
        <Card sx={{ p: 4, flex: 1 }}>
            <ComponentHeader pageName={"Clinical Personnel Listing"} actions={
                <Fragment>
                    <Button href="/add-resource/clinical-personnel" variant="contained">Add Provider</Button>
                </Fragment>
            } />

            {isMounted && <DataTable
                tableRows={clinicalPersonnel}
                columns={columns}
                getRowId={(row) => row.clinicalPersonnelID}
            />}
        </Card>
    )
}

export default ClinicalPersonelListing