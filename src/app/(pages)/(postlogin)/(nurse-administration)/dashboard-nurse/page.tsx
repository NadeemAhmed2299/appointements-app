"use client";

import ComponentHeader from "@/app/components/componentHeader";
import GrowingTextField from "@/app/components/growingTextField";
import Header from "@/app/components/header";

import { Box, Button, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import DashboardStats from "./components/dashboardStats";

function Page() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Fragment>
      <Header pillLabel="Nurse" userRole="Nurse">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"Nurse Administrator Dashboard"} actions={
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined">Add Widget</Button>
        </Box>
      } />

      <DashboardStats />

    </Fragment>
  )
}

export default Page