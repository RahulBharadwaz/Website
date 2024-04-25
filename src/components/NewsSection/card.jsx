// Card.js
import React from "react";

const Card = ({ article }) => {
  const handleClick = () => {
    window.open(article.url, "_blank");
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="img">
        <img src={article.urlToImage} alt={article.title} />
      </div>
      <h2 className="title">{article.title}</h2>
      <p className="desc">{article.description}</p>
    </div>
  );
};

export default Card;
