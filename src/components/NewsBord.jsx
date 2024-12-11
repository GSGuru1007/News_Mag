import { useEffect, useState } from "react"
import { Newsitem } from "./Newsitem";

export const NewsBord = ({category}) => {
  const [articles,setArticles] = useState([]);
  
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
  .then(response => response.json())
  .then(data => setArticles(data.articles || []))
  .catch(error => console.error('Error fetching news:', error));

  },[category])


  return (
    <div >
      <h2 className="text-center mt-5 " style={{ marginTop: '5px', padding:'10px'}}>Latest <span className="badge bg-danger">News</span> </h2>
      {articles?.length > 0 ? articles.map((news, index) => (
    <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
)) : <p>No news available.</p>}


    </div>
  )
}

export default NewsBord