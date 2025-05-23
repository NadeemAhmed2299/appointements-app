import ComponentHeader from "@/app/components/componentHeader"
import FilterUI from "@/app/components/filterUI"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Box } from "@mui/material"
import { Fragment } from "react"
import OrganizationListing from "./components/organizationListing"

function page() {
    return (
        <Fragment>
            <Header pillLabel="Organization" userRole="System Admin">
                <GrowingTextField placeholder="Search..." size="small" />
            </Header>

            <ComponentHeader isPageHeader={true} pageName={"Manage Organization"} />

            <Box sx={{ mb: 3 }}>
                <FilterUI />
            </Box>

            <OrganizationListing />
        </Fragment>
    )
}

export default page