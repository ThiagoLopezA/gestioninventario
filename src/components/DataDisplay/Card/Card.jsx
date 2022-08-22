import { Grid } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

export default function Card({ title, number, icon }) {
  return (
    <Grid item xs={12} md={4}>
      <article className={styles.container}>
        <div>
          <h2 className={styles.number}>{number}</h2>
          <h4 className={styles.title}>{title}</h4>
        </div>
        <div className={styles.icon}>{icon}</div>
      </article>
    </Grid>
  );
}
