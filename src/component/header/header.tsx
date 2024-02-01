import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Button from "@mui/material/Button";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.header}>
          <div>Google Solution</div>
          <Link to="/write">
            <Button variant="outlined" size="large">
              記事を書く
            </Button>
          </Link>
        </div>
      </Link>
    </header>
  );
};

export default Header;
