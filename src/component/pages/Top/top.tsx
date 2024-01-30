import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../header/header";
import styles from "../../styles/top.module.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b9f6ca",
    },
    secondary: {
      main: "#b9f6ca",
    },
  },
});

export const Top = () => {
  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <div className={styles.buttons}>
          <Link to="/read">
            <Button variant="outlined" size="large">
              記事を読む
            </Button>
          </Link>
          <Link to="/write">
            <Button variant="outlined" size="large">
              記事を書く
            </Button>
          </Link>
        </div>
      </ThemeProvider>
    </div>
  );
};
