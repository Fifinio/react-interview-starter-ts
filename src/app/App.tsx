import React from "react";
import "./App.css";

import { AppRoutes } from "routing/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "./AppTheme";

export const App = () => {
  const theme = AppTheme;
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};
