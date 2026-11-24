
import React from "react";
import { IconButton } from "@mui/material";
import { Sun, Moon } from "lucide-react";

function ThemeButton({ dark, toggle }) {
  return (
    <IconButton
      onClick={toggle}
      color="inherit"
      aria-label="Switch theme"
    >
      {dark ? <Sun /> : <Moon />}
    </IconButton>
  );
}

export default ThemeButton;
