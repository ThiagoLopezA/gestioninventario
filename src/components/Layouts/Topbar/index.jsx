import { Grid } from "@mui/material";
import React from "react";
import styles from "./Topbar.module.css";
import Menu from "../../Inputs/Menu";
import logo from "../../../assets/img/logo.png";
export default function Topbar() {
  return (
    <Grid item xs={12}>
      <section className={styles.container}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Menu />
      </section>
    </Grid>
  );
}
