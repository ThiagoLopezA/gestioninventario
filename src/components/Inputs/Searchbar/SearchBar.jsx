import { Grid, TextField } from "@mui/material";
import styles from "./Searchbar.module.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar({ placeholder }) {
  return (
    <Grid item xs={12} className={styles.container}>
      <TextField
        id="outlined-basic"
        className={styles.searchbar}
        label={placeholder}
        variant="outlined"
      />
      <SearchIcon className={styles.button} />
    </Grid>
  );
}
