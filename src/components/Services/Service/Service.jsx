import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Service.module.css";

export default function Service({ title, icon, abled, link }) {
  let state = abled == true ? "container-active" : "container";
  return (
    <Grid item xs={2}>
      {abled ? (
        <Link to={link} className={styles.link}>
          <article className={styles[state]}>
            <span className={styles.icon}>{icon}</span>
            <h2 className={styles.title}>{title}</h2>
          </article>
        </Link>
      ) : (
        <article className={styles[state]}>
          <span className={styles.icon}>{icon}</span>
          <h2 className={styles.title}>{title}</h2>
        </article>
      )}
    </Grid>
  );
}
