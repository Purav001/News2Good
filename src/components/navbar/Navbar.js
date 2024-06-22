import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setCategory, setSearchTerm }) => {
  const [isActive, setIsActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.trim());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <b>My News-App</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('general')}>
                  General
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('technology')}>
                  Technology
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('business')}>
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('health')}>
                  Health
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('science')}>
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('sports')}>
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => setCategory('entertainment')}>
                  Entertainment
                </div>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
