import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/Logo.png'; 
import './footer.scss';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Menu Légal */}
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li><Link to="/mentions-legales">Mentions Légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Gestion des cookies</Link></li>
            </ul>
          </div>

          {/* Logo */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <img src={logoImg} alt="Logo Région Auvergne-Rhône-Alpes" className="footer-logo" />
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <address className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="fw-bold text-white text-decoration-none">+33 (0)4 26 73 40 00</a>
            </address>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;