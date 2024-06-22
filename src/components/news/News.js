import React, { useEffect, useState } from 'react';
import './News.scss';

const News = ({ category, searchTerm }) => {
  const [mynews, setMyNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=e8bcb5454d444bdbba06ed45e8c8a3cb`;
    
    // Check if a category is selected
    if (category) {
      url += `&category=${category}`;
    }

    // Check if a searchTerm is provided and filter by it
    if (searchTerm) {
      url += `&q=${encodeURIComponent(searchTerm)}`;
    }

    let response = await fetch(url);
    const data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, [category, searchTerm]);

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
                <img src={ele.urlToImage} alt="" />
                <div className="overlay"></div>
              </div>
              <div className="card-content overlay">
                <h2>{ele.author === '' ? 'Janelle Ash' : ele.author}</h2>
                <p>{ele.title}</p>
                <a href={ele.url} className="button">
                  Find out more
                  <span className="material-symbols-outlined">{'->'}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="center">
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={n}>
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
