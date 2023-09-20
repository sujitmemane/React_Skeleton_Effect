import React, { useState, useEffect } from "react";
import SkeletonElement from "../skeletons/SkeletonElement";
import SkeletonArticle from "../skeletons/SkeletonArticle";
import Shimmer from "../skeletons/Shimmer";

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => {
          return (
            <div className="article" key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
      {!articles &&
        [1, 2, 3, 4, 5].map((element) => <SkeletonArticle key={element} />)}
    </div>
  );
};

export default Articles;
