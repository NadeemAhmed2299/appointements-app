"use client";

import ComponentHeader from "@/app/components/componentHeader";
import { getRoomStatusColor } from "@/app/utils/util";
import {
  Button,
  Card,
  Chip,
} from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import DataTable from "@/app/components/dataTable";
import { ActionMenu } from "@/app/components/actionMenu";

export interface Room {
  id: string;
  name: string;
  location: string;
  capacity: string;
  status: string;
}

const roomData: Room[] = [
  {
    id: "1",
    name: "Conference Room A",
    location: "Main Building - 1st Floor",
    capacity: "20 people",
    status: "Available",
  },
  {
    id: "2",
    name: "Patient Consultation Room 3",
    location: "East Wing - 2nd Floor",
    capacity: "4 people",
    status: "Booked",
  },
  {
    id: "3",
    name: "Staff Training Room",
    location: "Main Building - 3rd Floor",
    capacity: "30 people",
    status: "Available",
  },
  {
    id: "4",
    name: "Treatment Room 5",
    location: "West Wing - 1st Floor",
    capacity: "2 people",
    status: "Maintenance",
  },
];

function RoomListing() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Room Name",
      flex: 1.5,
      renderCell: (params: GridRenderCellParams) => (
        <Link
          href={`/rooms/${params.row.id}`}
          style={{
            color: "#6b5cd6",
            textDecoration: "underline",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          {params.value}
        </Link>
      ),
    },
    { field: "location", headerName: "Location", flex: 1.5 },
    { field: "capacity", headerName: "Capacity", flex: 1 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams) => (
        <Chip label={params.value} color={getRoomStatusColor(params.value)} size="small" />
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
      <ComponentHeader
        pageName={"Room Listing"}
        actions={
          <Fragment>
            <Button variant="contained" href="/add-resource/resource-rooms">
              Add Room
            </Button>
          </Fragment>
        }
      />
      {isMounted && (
        <DataTable
          tableRows={roomData}
          columns={columns}
          getRowId={(row) => row.id}
        />
      )}
    </Card>
  );
}

export default RoomListing;
