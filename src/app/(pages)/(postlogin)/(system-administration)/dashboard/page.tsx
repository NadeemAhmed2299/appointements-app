"use client";

import ComponentHeader from "@/app/components/componentHeader";
import GrowingTextField from "@/app/components/growingTextField";
import Header from "@/app/components/header";

import { Box, Button, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import DashboardStats from "./components/dashboardStats";
import ExternalLinks from "./components/externalLinks";
import RecentNotifications from "./components/recentNotifications";
import AiOptimizationMetrics from "./components/aiOptimizationMetrics";
import Organizations from "./components/organizations";

function Page() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Fragment>
      <Header pillLabel="Admin" userRole="Organization">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"System Administration Dashboard"} actions={
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined">Add Widget</Button>
        </Box>
      } />

      <DashboardStats />

      <Grid container spacing={2} sx={{ gap: 2, py: 3, }}>
        <AiOptimizationMetrics />
      </Grid>

      <Grid container spacing={2} sx={{ gap: 2, pb: 3 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          {isMounted && <Organizations />}
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <RecentNotifications />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ gap: 2, pb: 3, }}>
        <ExternalLinks />
      </Grid>

    </Fragment>
  )
}

export default Page