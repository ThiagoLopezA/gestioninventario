import { Grid } from "@mui/material";
import React from "react";
import styles from "./Action.module.css";

export default function Action({ icon, title, onClick }) {
  return (
    <Grid item>
      <article className={styles.container} onClick={onClick}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </article>
    </Grid>
  );
}
