"use client"

import ComponentHeader from "@/app/components/componentHeader"
import FilterUI from "@/app/components/filterUI"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Box } from "@mui/material"
import { Fragment } from "react"
import ClinicalPersonelListing from "./components/clinicalPersonnelListing"
import NavbarMenu from "../NavbarMenu"

// TODO: add table in correct format as per design

function page() {
    return (
        <Fragment>
            <Header pillLabel="Organization" userRole="Facility">
                <GrowingTextField placeholder="Search..." size="small" />
            </Header>

            <ComponentHeader isPageHeader={true} pageName={"Manage Resources"} />
            <NavbarMenu />

            <Box sx={{ mb: 3 }}>
                <FilterUI />
            </Box>

            <ClinicalPersonelListing />
        </Fragment>
    )
}

export default page