import { Avatar, Grid } from "@mui/material";
import React from "react";
import StyledButton from "../../Inputs/Button";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import styles from "./ServicesAside.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
export default function ServicesAside() {
  const services = [
    {
      title: "Inventario",
      link: "/inv",
      icon: <InventoryIcon />,
    },
    {
      title: "Logistica",
      link: "/",
      icon: <LocalShippingIcon />,
      disabled: true,
    },
    {
      title: "Facturación",
      link: "/",
      icon: <AccountBalanceIcon />,
      disabled: true,
    },
  ];
  return (
    <Grid item xs={2} className={styles.wrapper}>
      <section className={styles.user_section}>
        <Avatar variant="rounded" className={styles.user_avatar} />
        <h2 className={styles.user_name}>Usuario</h2>
      </section>
      <div className={styles.buttonWrapper}>
        <div className={styles.servicesWrapper}>
          {services.map((e, i) => {
            return (
              <StyledButton
                text={e.title}
                link={e.link}
                disabled={e.disabled ? e.disabled : null}
                icon={e.icon}
                key={e + i}
                aside={true}
              />
            );
          })}
        </div>
        <StyledButton
          className={styles.lastButton}
          text="Cerrar sesión"
          aside={true}
          icon={<LogoutIcon />}
        />
      </div>
    </Grid>
  );
}
