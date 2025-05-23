import ComponentHeader from "@/app/components/componentHeader";
import GrowingTextField from "@/app/components/growingTextField";
import Header from "@/app/components/header";
import { Fragment } from "react";
import { OrganizationForm } from "./organizationForm";

function page() {
  return (
    <Fragment>
      <Header pillLabel="Admin" userRole="Organization">
        <GrowingTextField placeholder="Search..." size="small" />
      </Header>
      <ComponentHeader pageName={"Add Organization"} />
      <OrganizationForm />
    </Fragment>
  );
}

export default page