import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../assets/img/404.jpg'; // image 404

const NotFound = () => {
  return (
    <div className="page-not-found d-flex align-items-center min-vh-100 bg-white">
      <div className="container">
        <div className="row align-items-center gy-5">
          
          {/* TEXT */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <h1 className="display-1 fw-bold mb-0" style={{ color: '#00497C', fontSize: '8rem' }}>
              404
            </h1>
            <h2 className="display-6 fw-bold mb-3 text-dark">
              Oups ! La page est introuvable.
            </h2>
            <p className="lead text-muted mb-5">
              Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
            </p>
            
            {/* Button home */}
            <Link 
              to="/" 
              className="btn btn-primary px-5 py-3 fw-bold rounded-pill shadow-sm"
              style={{ backgroundColor: '#00497C', borderColor: '#00497C' }}
            >
              <i className="fas fa-arrow-left me-2"></i> REVENIR À L'ACCUEIL
            </Link>
          </div>

          {/* IMAGE */}
          <div className="col-12 col-lg-6">
            <img 
              src={img404} 
              alt="Illustration 404" 
              className="img-fluid"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;