
import React from "react";
import { Snackbar, Alert } from "@mui/material";

function ToastMessage({ message, close }) {
  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={2500}
      onClose={close}
    >
      <Alert severity="success" onClose={close}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default ToastMessage;
