import React, { useEffect, useState } from "react";
import "./News.scss"

const News = ({category}) => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e8bcb5454d444bdbba06ed45e8c8a3cb`
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };
 
  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
    <h1 className="text-center my-3">Latest <span className="badge bg-danger">News</span></h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
            <div class = "card " >
              <div className="conatiner">
              <img src={ele.urlToImage}  alt="" />
              <div className="overlay"></div>
              </div>
              <div class="card-content overlay">
                <h2>
                {ele.author == "" ? "Janelle Ash" : ele.author}
                </h2>
                <p>
                  {ele.title}
                </p>
                <a href={ele.url} class="button">
                  Find out more 
                  <span class="material-symbols-outlined">
                   {'->'}
                  </span>
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;
