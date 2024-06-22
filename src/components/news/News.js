import React, { useEffect, useState } from "react";
import "./News.scss"

const News = ({ category }) => {
  const [mynews, setMyNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const fetchData = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e8bcb5454d444bdbba06ed45e8c8a3cb`
    );
    const data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = mynews.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(mynews.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <h1 className="text-center my-3">
        Latest <span className="badge bg-danger">News</span>
      </h1>
      <div className="mainDiv">
      <div className="main">
        {records.map((ele) => (
          <div className="card" key={ele.url}>
            <div className="conatiner">
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage}alt="" />
              <div className="overlay"></div>
            </div>
            <div className="card-content overlay wr">
              <h2>{ele.author === "" ? "Janelle Ash" : ele.author}</h2>
              <p>{ele.title}</p>
              <a href={ele.url} className="button">
                Find out more
                <span className="material-symbols-outlined">{"->"}</span>
              </a>
            </div>
          </div>
        ))}</div>
        <div className="center">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={n}
              >
                <a href="#" className="page-link" onClick={() => changeCPage(n)}>
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
