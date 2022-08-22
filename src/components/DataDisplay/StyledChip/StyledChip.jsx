import { Chip } from "@mui/material";
import React from "react";
import styles from "./StyledChip.module.css";

export default function StylesChip({ title }) {
  const style = title == "Realizado" ? "done" : "working";
  return <Chip label={title} className={styles[style]} size="small" />;
}
