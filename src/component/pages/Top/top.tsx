import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "../../header/header";
import ArticlesMap from "../../airticlesMap/articlesmap";
import styles from "../../styles/top.module.css";
import { createTheme, ThemeProvider } from "@mui/material";

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
  const [followArticle, setFollowArticle] = useState<article[]>(articles);
  const [followCommunity, setFollowCommunity] = useState<article[]>(articles);

  return (
    <div>
      <Header />
      <div className="whole_page">
        <div className="followAirticle">
          <ul>
            <li>
              <ArticlesMap articles={followArticle} />
            </li>
            <li>
              <ArticlesMap articles={followCommunity} />
            </li>
          </ul>
        </div>
        <div>あ</div>
        <div>あ</div>
      </div>
    </div>
  );
};
