import { Avatar, Button, Grid } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import StyledButton from "../../Inputs/ButtonV2";
import styles from "./EntityCard.module.css";
export default function EntityCard({ location, name, buttonText }) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <article className={styles.container}>
        <div className={styles.image}>
          <Avatar variant="rounded" className={styles.avatar}>
            <PersonIcon />
          </Avatar>
        </div>
        <div className={styles.information}>
          <p className={styles.location}>{location}</p>
          <h4 className={styles.name}>{name}</h4>
          <StyledButton text={buttonText} link="/" />
        </div>
      </article>
    </Grid>
  );
}
