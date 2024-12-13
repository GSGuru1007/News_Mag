import { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const NewsBord = ({ category }) => {
  const [articles, setArticles] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Check the structure of the data
        console.log("Articles:", data.articles); // Verify articles is an array
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-5" style={{ marginTop: '5px', padding: '10px' }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {error ? (
        <p className="text-center text-danger">Failed to load news: {error}</p>
      ) : articles.length > 0 ? (
        articles && articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available.</p>
      )}
    </div>
  );
};

export default NewsBord;
