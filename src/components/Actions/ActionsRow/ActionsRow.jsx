import { Grid } from "@mui/material";
import React from "react";
import styles from "./ActionsRow.module.css";

export default function ActionsRow(props) {
  const { title, subtitle } = props;
  return (
    <Grid item xs={12}>
      <section className={styles.container}>
        <div className={styles.container_header}>
          <h2 className={styles.header_title}>{title}</h2>
          <h4 className={styles.header_subtitle}>{subtitle}</h4>
        </div>
        <div className={styles.container_actions}>{props.children}</div>
      </section>
    </Grid>
  );
}
