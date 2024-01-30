import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <div className={styles.header}>Google Solution</div>
      </Link>
    </header>
  );
};

export default Header;
