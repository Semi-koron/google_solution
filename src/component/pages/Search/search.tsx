import { useState } from "react";
import Header from "../../header/header";
import ArticlesMap from "../../airticlesMap/articlesmap";
import styles from "../../styles/top.module.css";

type article = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export const Search = () => {
  return (
    <div>
      <Header />
      <div className={styles.wholePage}></div>
    </div>
  );
};
