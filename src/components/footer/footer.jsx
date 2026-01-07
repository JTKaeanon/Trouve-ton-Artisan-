import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          
          {/* Liens légaux */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li><a href="/mentions-legales">Mentions Légales</a></li>
              <li><a href="/donnees-personnelles">Données personnelles</a></li>
              <li><a href="/accessibilite">Accessibilité</a></li>
              <li><a href="/cookies">Gestion des cookies</a></li>
            </ul>
          </div>

          {/* Logo et slogan central */}
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <h2 className="h5 fw-bold mb-1">Trouve ton artisan !</h2>
            <p className="small mb-0">Avec la région<br/>Auvergne-Rhône-Alpes</p>
          </div>

          {/* Adresse et Contact */}
          <div className="col-12 col-md-4 text-md-end text-center">
            <address className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="fw-bold">+33 (0)4 26 73 40 00</a>
            </address>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;