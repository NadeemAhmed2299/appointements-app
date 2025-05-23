"use client";

import { Box, Button, Grid, useTheme } from "@mui/material";
import { useSidebar } from "@/app/contexts/sidebarContext";
import { Fragment } from "react";
import Header from "@/app/components/header";
import GrowingTextField from "@/app/components/growingTextField";
import ComponentHeader from "@/app/components/componentHeader";
import MetricCards from "./components/metricsCard";
import CaseBarChart from "./components/caseBarChart";
import SatisfactionSection from "./components/satisfactionSection";
import AiPoweredCard from "./components/aiPoweredRecomendation";
import AbsenceReasonsChart from "./components/absenseReasons";
import WaitListManagement from "./components/waitListManagement";
import ProviderScheduling from "./components/providerScheduling";
import AutomationEfficiencyTrend from "./components/automationEfficiencyTrend";
import AutomationRoiAnalysis from "./components/automationRoiAnalysis";
import ExternalLinks from "./components/externalLinks";

function Page() {
    const theme = useTheme();
    const { toggleSidebar } = useSidebar();

    return (
        <Fragment>
            <Header pillLabel="Facility" userRole="Facility">
                <GrowingTextField placeholder="Search..." size="small" />
            </Header>

            <ComponentHeader isPageHeader={true} pageName={"Practice Administrator Dashboard"} actions={
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="outlined">Add Widget</Button>
                </Box>
            } />
            <Grid container spacing={2} mb={2}>
                <MetricCards />
            </Grid>

            {/* Graph and Satisfaction Section */}
            <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
                <CaseBarChart />
                <SatisfactionSection />
            </Grid>

            {/* ai-powered recommnedation */}            
            <AiPoweredCard />

            {/* patient info */}
            <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
            <AbsenceReasonsChart />

            <WaitListManagement />

            <ProviderScheduling />
            </Grid>

            {/* automated trend and satisfactory rating */}
            <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>
            <AutomationEfficiencyTrend />

            <AutomationRoiAnalysis />            
            </Grid>
            
            {/* External Links */}
            <Grid container spacing={2} mb={2} sx={{ width: '100%' }}>            
                <ExternalLinks />
            </Grid>
        </Fragment>
    )
}

export default Page