import ComponentHeader from "@/app/components/componentHeader"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Fragment } from "react"
import { SystemAdminForm } from "./systemAdminForm"

function page() {
  return (
    <Fragment>
      <Header pillLabel="Admin" userRole="System Admin">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"Add System Admin"} />
      <SystemAdminForm />
    </Fragment>
  )
}

export default page