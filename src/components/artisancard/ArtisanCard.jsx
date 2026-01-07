import React from 'react';
import './ArtisanCard.scss';

const ArtisanCard = ({ artisan }) => {
  // 1. Chemin dynamique vers le dossier public
  const backgroundStyle = {
    backgroundImage: `url(/assets/img/specialites/${artisan.image})`,
    backgroundSize: 'cover',
    // On passe à 85% pour pousser l'image vers la gauche et voir le radiateur à droite
    backgroundPosition: '85% center', 
    backgroundRepeat: 'no-repeat'
  };

  // 2. Logique pour générer les 5 étoiles de la maquette
  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i} 
          className={i <= Math.round(note) ? "star-filled" : "star-empty"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="col-12 col-md-4 mb-4">
      <div 
        className="artisan-card-premium shadow-sm h-100 border-0" 
        style={backgroundStyle}
      >
        <div className="card-content p-4 text-center d-flex flex-column justify-content-center">
          <h3 className="fw-bold">{artisan.name}</h3>
          
          <p className="artisan-category">{artisan.specialty}</p>
          
          <div className="d-flex align-items-center justify-content-center mb-1">
            <span className="me-2 fw-bold fs-4 note-number">{artisan.note}</span>
            <span className="stars-container fs-4">
              {renderStars(artisan.note)}
            </span>
          </div>
          
          <p className="fw-bold location-text">{artisan.location}</p>

          <button className="btn-voir-fiche mt-3">
            VOIR LA FICHE <br /> DE L'ARTISAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;