import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import navlogo from './image/navlogo.png';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ps-4 pe-3 ">
      <Link className="navbar-brand me-auto" to="#">
        <img src={navlogo} alt="Logo" width="50" height="50" />
      </Link>


      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

    
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link navedit" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navedit" to="...">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navedit" to="...">Contact Us</Link>
          </li>
        </ul>
        <button className="btn login-btn px-4 py-2 ">Login</button>
      </div>
    </nav>
  );
}

export default Header;
