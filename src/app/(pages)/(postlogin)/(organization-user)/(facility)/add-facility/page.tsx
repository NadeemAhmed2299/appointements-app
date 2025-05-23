import ComponentHeader from "@/app/components/componentHeader"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Fragment } from "react"
import { FacilityForm } from "./facilityForm"

function page() {
  return (
    <Fragment>
      <Header pillLabel="Admin" userRole="System Admin">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"Add System Admin"} />
      <FacilityForm />
    </Fragment>
  )
}

export default page