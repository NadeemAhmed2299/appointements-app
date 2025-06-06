"use client";

import ComponentHeader from "@/app/components/componentHeader";
import GrowingTextField from "@/app/components/growingTextField";
import Header from "@/app/components/header";

import { Container, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import PhysicianCalendar from "./components/Calendar";

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

      <ComponentHeader isPageHeader={true} pageName={"Physician Assignments"} />
      <PhysicianCalendar />

    </Fragment>
  )
}

export default Page