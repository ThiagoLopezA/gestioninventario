import { Grid } from "@mui/material";
import React from "react";
import Topbar from "../../../components/Layouts/Topbar";
import ServicesRow from "../../../components/Services/ServicesRow";

export default function MainHome() {
  return (
    <Grid container className="content_wrapper">
      <Topbar />
      <ServicesRow />
    </Grid>
  );
}
