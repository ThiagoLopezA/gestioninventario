import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./AsideButton.module.css";

export default function AsideButton({ text, link, icon, active }) {
  let state = active ? "button-active" : "button";
  return (
    <Link to={link} className={styles.link}>
      <Button startIcon={icon} className={styles[state]}>
        <span className={styles.text}>{text}</span>
      </Button>
    </Link>
  );
}
