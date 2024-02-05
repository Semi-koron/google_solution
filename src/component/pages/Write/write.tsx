import { useState } from "react";
import Header from "../../header/header";
import Markdownform from "../../markdown/markdown";
import ArticlesMap from "../../airticlesMap/articlesmap";
import styles from "../../styles/write.module.css";
import buttonStyles from "../../button/button.module.css";

type article = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export const Write = () => {
  return (
    <div>
      <Header />
      <div className={styles.wholePage}>
        <div className={styles.mainEditer}>
          <h2>記事のタイトル</h2>
          <input type="text" className={styles.contentTitle} />
          <h2>記事のタグ</h2>
          <input type="text" className={styles.contentTitle} />
          <Markdownform />
        </div>
        <div className={styles.sideEditer}>
          <button className={buttonStyles.button}>オートマークダウン</button>
        </div>
      </div>
      <div>
        <button className={buttonStyles.button}>投稿</button>
      </div>
    </div>
  );
};
