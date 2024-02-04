import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header_box}></div>
      <Link to="/">
        <div className={styles.header}>
          <div>Google Solution</div>
          <div className={styles.header_modules}>
            <div className={styles.search_module}>
              <input type="text" className={styles.header_searchbar} />

              <div className={styles.search_button}>
                <Link to="/write">
                  <SearchIcon />
                </Link>
              </div>
            </div>
            <div className={styles.post_module}>
              <Link to="/write"></Link>
            </div>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Header;
