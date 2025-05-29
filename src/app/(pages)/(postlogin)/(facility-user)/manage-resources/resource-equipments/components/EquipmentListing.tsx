"use client";

import ComponentHeader from "@/app/components/componentHeader";
import { Button, Card, Chip, IconButton, Typography, Box } from "@mui/material";
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Fragment, useEffect, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DataTable from "@/app/components/dataTable";
import { ActionMenu } from "@/app/components/actionMenu";

export interface Equipment {
  id: string;
  name: string;
  subType: string;
  location: string;
  maintenanceDate: string;
  status: "Operational" | "Undergoing Repairs";
}

const equipmentList: Equipment[] = [
  {
    id: "EQ001",
    name: "Linear Accelerator #1",
    subType: "Radiation Therapy",
    location: "Radiation Wing - Room 103",
    maintenanceDate: "05/20/2025",
    status: "Operational"
  },
  {
    id: "EQ002",
    name: "MRI Scanner A",
    subType: "Diagnostic Imaging",
    location: "Imaging Department - Room 207",
    maintenanceDate: "05/20/2025",
    status: "Undergoing Repairs"
  },
  {
    id: "EQ003",
    name: "CT Scanner 2",
    subType: "Diagnostic Imaging",
    location: "Emergency Department",
    maintenanceDate: "05/20/2025",
    status: "Operational"
  },
  {
    id: "EQ004",
    name: "Infusion Pump Set",
    subType: "Treatment Delivery",
    location: "Chemotherapy Suite",
    maintenanceDate: "05/20/2025",
    status: "Operational"
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Operational":
      return "success";
    case "Undergoing Repairs":
      return "error";
    default:
      return "default";
  }
}

function EquipmentListing() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Equipment',
      flex: 1.2,
      renderCell: (params: GridRenderCellParams) => (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ color: '#6941C6', fontWeight: 500, cursor: 'pointer' }}>
            {params.value}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {params.row.subType}
          </Typography>
        </Box>
      )
    },
    {
      field: 'location',
      headerName: 'Location',
      flex: 1.2,
    },
    {
      field: 'maintenanceDate',
      headerName: 'Next Maintenance',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <Chip
          label={params.value}
          color={getStatusColor(params.value)}
          size="small"
          sx={{
            fontWeight: 500,
            color: params.value === "Undergoing Repairs" ? "#fff" : undefined,
            bgcolor: params.value === "Undergoing Repairs" ? "#FF3333" : undefined,
          }}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Action(s)',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <ActionMenu />,
    },
  ];

  return (
    <Card sx={{ p: 4, flex: 1 }}>
      <ComponentHeader pageName={"Equipment Listing"} actions={
        <Fragment>
          <Button variant="contained" href="/add-resource/resource-equipment">Add Equipment</Button>
        </Fragment>
      } />

      {isMounted && (
        <DataTable
          tableRows={equipmentList}
          columns={columns}
          getRowId={(row) => row.id}
        />
      )}
    </Card>
  );
}

export default EquipmentListing;
