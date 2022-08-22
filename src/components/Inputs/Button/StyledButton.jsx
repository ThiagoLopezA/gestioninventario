import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./StyledButton.module.css";

export default function StyledButton({
  link,
  icon,
  text,
  active,
  aside,
  disabled,
}) {
  const status = active ? "button_active" : "button";
  const breakpoint = aside ? "aside" : null;
  return (
    <React.Fragment>
      {link ? (
        <Link to={link} className={styles.link}>
          <Button
            startIcon={icon}
            className={styles[status]}
            disabled={disabled ? true : false}
          >
            <div className={styles[breakpoint]}>{text}</div>
          </Button>
        </Link>
      ) : (
        <Button
          startIcon={icon}
          className={styles[status]}
          disabled={disabled ? true : false}
        >
          <div>{text}</div>
        </Button>
      )}
    </React.Fragment>
  );
}
