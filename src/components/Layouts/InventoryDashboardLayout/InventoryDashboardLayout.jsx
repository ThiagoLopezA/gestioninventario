import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";
import Topbar from "../Topbar";
import styles from "./InventoryDashboardLayout.module.css";
export default function DashboardLayout(props) {
  return (
    <React.Fragment>
      <Grid container>
        <Topbar />
      </Grid>
      <Grid container>
        <Aside />
        <Grid item xs={10} className={styles.content_wrapper}>
          <Outlet />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
