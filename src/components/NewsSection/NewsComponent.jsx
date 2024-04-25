// App.js
import React, { useState, useEffect } from "react";
import "./news.css"; // Import your CSS file
import Card from "./card.jsx"; // Import Card component

const apiKey = "1b3e311c99e24e7aa88eba3d1cfeaea4";

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchNews("top-headlines?country=in");
  }, []);

  const fetchNews = async (endpoint) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/${endpoint}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearch = async () => {
    if (searchTerm) {
      fetchNews(`everything?q=${searchTerm}`);
    } else {
      fetchNews("top-headlines?country=in");
    }
  };

  return (
    <div className="news">
      <div className="nav">
        <h1>News</h1>
        <div className="search">
          <input
            type="text"
            id="in-search"
            placeholder="search news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch} id="search-btn">Search</button>
        </div>
      </div>
      <main>
        <div className="card-container">
          {articles.map((article, index) => (
            <Card key={index} article={article} />
          ))}
        </div>
      </main>
      <hr />
      <footer>
        <div id="foot">
          Lucknow, Uttar Pradesh | &#169; NEWS | About | Contact |
        </div>
        <a href="#">Back to top</a>
      </footer>
    </div>
  );
}

export default App;
