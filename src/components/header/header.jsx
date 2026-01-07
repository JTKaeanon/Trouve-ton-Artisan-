import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from '../../assets/img/Logo.png'; 

const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl bg-white shadow-sm sticky-top custom-header">
      <div className="container-fluid d-flex align-items-center flex-nowrap">
        
        {/* 1. LOGO */}
        <Link className="navbar-brand me-2" to="/" style={{ flexShrink: 0 }}>
          <img src={logoImg} alt="Trouve ton artisan" className="header-logo" />
        </Link>

        {/* 2. RECHERCHE */}
        <form className="d-flex flex-grow-1 mx-2 search-container order-2 order-xl-last">
          <div className="input-group">
            <input 
              className="form-control rounded-start-pill border-primary border-end-0" 
              type="search" 
              placeholder="Rechercher..." 
            />
            <span className="input-group-text bg-white border-primary border-start-0 rounded-end-pill">
              <i className="bi bi-search text-primary"></i>
            </span>
          </div>
        </form>

        {/* 3. BURGER (Cible #navbarNav) */}
        <button 
          className="navbar-toggler border-0 order-3 ms-1" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 4. LIENS (Menu déroulant qui doit descendre) */}
        <div className="collapse navbar-collapse order-xl-2" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold text-nowrap align-items-start">
            <li className="nav-item"><NavLink className="nav-link" to="/category/batiment">Bâtiment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/fabrication">Fabrication</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/alimentation">Alimentation</NavLink></li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;