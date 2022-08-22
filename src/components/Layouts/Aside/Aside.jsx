import { Avatar, Grid } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import StyledButton from "../../Inputs/Button";
import styles from "./Aside.module.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { useLocation } from "react-router-dom";
import AsideButton from "../AsideButton/AsideButton";

export default function Aside() {
  const location = useLocation();
  const isActive = link => link == location.pathname;
  const pages = [
    {
      name: "Inicio",
      link: "/inv",
      icon: <HomeRoundedIcon />,
    },
    {
      name: "Proveedores",
      link: "/inv/proveedores",
      icon: <GroupsRoundedIcon />,
    },
    {
      name: "Movimientos",
      link: "/inv/reportes",
      icon: <SyncAltIcon />,
    },
    {
      name: "Inventario",
      link: "/inv/inventario",
      icon: <WidgetsRoundedIcon />,
    },
    {
      name: "Usuarios",
      link: "/inv/usuarios",
      icon: <GroupsRoundedIcon />,
    },
  ];
  return (
    <Grid item xs={2}>
      <section className={styles.section}>
        <article className={styles.user_info}>
          <Avatar className={styles.avatar}>
            <PersonIcon />
          </Avatar>
          <div className={styles.user_information}>
            <h2 className={styles.username}>Nombre de usuario</h2>
            <h4 className={styles.user_position}>Administrador central</h4>
          </div>
        </article>
        {pages.map((e, i) => {
          return (
            <AsideButton
              text={e.name}
              link={e.link}
              icon={e.icon}
              key={e + i}
              active={isActive(e.link)}
            />
          );
        })}
        <AsideButton
          text="Menú principal"
          link="/"
          active={false}
          icon={<LogoutRoundedIcon />}
        />
      </section>
    </Grid>
  );
}
