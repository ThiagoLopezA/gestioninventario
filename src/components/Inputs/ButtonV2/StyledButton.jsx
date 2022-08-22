import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./StyledButton.module.css";
export default function StyledButton({ link, text }) {
  return (
    <>
      {link ? (
        <Link to={link} className={styles.link}>
          <Button className={styles.button} size="small">
            {text}
          </Button>
        </Link>
      ) : (
        <Button className={styles.button} size="small">
          {text}
        </Button>
      )}
    </>
  );
}
