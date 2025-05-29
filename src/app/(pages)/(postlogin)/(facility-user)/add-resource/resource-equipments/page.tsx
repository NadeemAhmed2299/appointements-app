import ComponentHeader from "@/app/components/componentHeader"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Fragment } from "react"
import { ResourceEquipmentForm } from "./ResourceEquipmentFom"

function page() {
  return (
    <Fragment>
      <Header pillLabel="Facility" userRole="Facility">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"Add Equipment Resource"} />
      <ResourceEquipmentForm />
    </Fragment>
  )
}

export default page