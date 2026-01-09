import React, { useState } from 'react'; 
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../../assets/img/Logo.png'; 
import './header.scss';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchTerm('');
      
      // close menu after research
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  };


  return (
    <nav className="navbar navbar-expand-xl custom-header sticky-top">
      <div className="container-fluid px-3 px-xl-5">
        
        {/* LOGO */}
        <Link className="navbar-brand me-xl-5" to="/">
          <img src={logoImg} alt="Trouve ton artisan" className="header-logo" />
        </Link>

        {/* BURGER */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* LINKS */}
          <ul className="navbar-nav w-100 justify-content-evenly fw-bold">
            <li className="nav-item"><NavLink className="nav-link" to="/category/batiment">Bâtiment</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/services">Services</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/fabrication">Fabrication</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/category/alimentation">Alimentation</NavLink></li>
          </ul>

          {/* RESEARCH BAR */}
          <form className="search-container ms-xl-5" onSubmit={handleSearch}>
            <div className="input-group search-box">
              <input 
                className="form-control" 
                type="search" 
                placeholder="Rechercher..." 
                aria-label="Rechercher"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-search" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

        </div>
      </div>
    </nav>
  );
};

export default Header;