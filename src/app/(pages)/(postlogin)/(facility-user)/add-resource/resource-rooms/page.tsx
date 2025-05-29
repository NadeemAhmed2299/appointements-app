import ComponentHeader from "@/app/components/componentHeader"
import GrowingTextField from "@/app/components/growingTextField"
import Header from "@/app/components/header"
import { Fragment } from "react"
import { ResourceRoomsForm } from "./resourceRoomForm"

function page() {
  return (
    <Fragment>
      <Header pillLabel="Facility" userRole="Facility">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>

      <ComponentHeader isPageHeader={true} pageName={"Add New Room"} />
      <ResourceRoomsForm />
    </Fragment>
  )
}

export default page