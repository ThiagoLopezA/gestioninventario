import React from "react";
import EastIcon from "@mui/icons-material/East";
import styles from "./MovementLocations.module.css";
export default function MovementLocations({ from, to }) {
  return (
    <div className={styles.container}>
      {from}
      <EastIcon className={styles.icon} />
      {to}
    </div>
  );
}
