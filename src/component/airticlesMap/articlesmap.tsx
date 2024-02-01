import React from "react";
import { Link } from "react-router-dom";

type article = {
  id: number;
  title: string;
  content: string;
  date: string;
};

type ArticlesProps = {
  articles: article[];
};

const ArticlesMap: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p>{article.date}</p>
          <Link to={`/article/${article.id}`}>詳細を見る</Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesMap;
