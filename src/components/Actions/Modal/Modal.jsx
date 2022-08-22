import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./SimpleDialog.module.css";

export default function SimpleDialog(props) {
  const { open, handleClose, handleSubmit, title, closeButton, confirmButton } =
    props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit ? handleSubmit : null}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent className={styles.container}>
            {props.children}
          </DialogContent>
          {closeButton && confirmButton ? (
            <DialogActions>
              <Button className={styles.closeButton} onClick={handleClose}>
                {closeButton}
              </Button>
              <Button
                className={styles.confirmButton}
                type={handleSubmit ? "submit" : "button"}
              >
                {confirmButton}
              </Button>
            </DialogActions>
          ) : null}
        </form>
      </Dialog>
    </div>
  );
}
