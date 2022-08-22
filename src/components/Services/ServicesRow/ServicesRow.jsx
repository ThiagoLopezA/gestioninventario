import { Grid } from "@mui/material";
import React from "react";
import Service from "../Service/Service";
import styles from "./ServicesRow.module.css";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
export default function ServicesRow() {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} md={2} className={styles.column}>
        <Service
          icon={<InventoryIcon />}
          title="Inventario"
          abled={true}
          link="/inv"
        />
      </Grid>
      <Grid item xs={12} md={2} className={styles.column}>
        <Service icon={<LocalShippingIcon />} title="Logistica" />
      </Grid>
      <Grid item xs={12} md={2} className={styles.column}>
        <Service icon={<AccountBalanceIcon />} title="Facturación" />
      </Grid>
    </Grid>
  );
}
