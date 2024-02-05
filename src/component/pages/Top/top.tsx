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

let articles: article[] = [
  {
    id: 1,
    title: "記事1",
    content: "これは記事1の内容です。",
    date: "2024-02-01",
  },
  {
    id: 2,
    title: "記事2",
    content: "これは記事2の内容です。",
    date: "2024-02-02",
  },
  {
    id: 3,
    title: "記事3",
    content: "これは記事3の内容です。",
    date: "2024-02-03",
  },
];

export const Top = () => {
  const [followAuthor, setFollowAuthor] = useState<article[]>(articles);
  const [followCommunity, setFollowCommunity] = useState<article[]>(articles);

  return (
    <div>
      <Header />
      <div className={styles.wholePage}>
        <div className={styles.followArticles}>
          <div>
            <div className={styles.followAuthor}>
              <h2>フォローAuther</h2>
              <ArticlesMap articles={followAuthor} />
            </div>
            <div className={styles.followCommunity}>
              <h2>フォローCommunity</h2>
              <ArticlesMap articles={followCommunity} />
            </div>
          </div>
        </div>
        <div className={styles.trend}>
          <div className={styles.trendArticle}>
            <div className={styles.monthlyTrend}>
              <h2>月間トレンド記事</h2>
            </div>
            <div className={styles.weeklyTrend}>
              <h2>週間トレンド記事</h2>
            </div>
            <div className={styles.dailyTrend}>
              <h2>日間トレンド記事</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
