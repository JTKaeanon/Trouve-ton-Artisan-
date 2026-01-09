import React from 'react';
import { useParams } from 'react-router-dom';
import artisansData from '../data/artisans.json'; 
import '../assets/styles/pages/FicheArtisan.scss';

const FicheArtisan = () => {
  const { id } = useParams();
  const artisan = artisansData.find(item => item.id === id);

  if (!artisan) return <div className="text-center mt-5">Artisan introuvable</div>;

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.round(note) ? "star-filled" : "star-empty"}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="page-fiche-artisan py-5">
      <div className="container">
        
        <div className="row gy-4">
          
          {/* INFOS ARTISAN (LEFT) */}
          <div className="col-12 col-lg-7">
            <section className="frame-artisan-info p-4 h-100">
              <div className="img-container mb-3">
                 <img src={`/assets/img/specialites/${artisan.image}`} alt={artisan.name} className="artisan-img w-100 rounded" />
              </div>
              <div className="rating-block mb-2">
                <span className="stars">{renderStars(artisan.note)}</span>
                <span className="note-value ms-2">{artisan.note}/5</span>
              </div>
              <h1 className="artisan-title mb-2">{artisan.name}</h1>
              <div className="badges-container mb-4">
                <span className="badge-specialty me-2">{artisan.specialty}</span>
                <span className="badge-location">{artisan.location}</span>
              </div>
              <h2 className="section-subtitle mt-4">A propos</h2>
              <p className="about-text">{artisan.about}</p>
            </section>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-5">
            
            {/* CONTACT INFO */}
            <section className="frame-contact-info p-4 mb-4">
              <h3 className="card-title mb-4 text-center">Coordonnées de l'artisan</h3>
              
              <div className="contact-list">
                
                {/* SITE WEB */}
                {artisan.website && (
                  <a 
                    href={artisan.website} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-website w-100 mb-3 text-uppercase fw-bold"
                  >
                    Visiter le site web
                  </a>
                )}
              

                <div className="contact-item">
                  <i className="fas fa-envelope me-2"></i>
                  <a href={`mailto:${artisan.email}`} className="text-decoration-none">{artisan.email}</a>
                </div>
              </div>
            </section>

            {/* FORMULAIRE */}
            <section className="frame-contact-form p-4">
              <h3 className="card-title mb-3 text-center">Contacter l'artisan</h3>
              
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom / Prénom</label>
                  <input type="text" className="form-control" id="name" placeholder="Votre nom complet" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Votre email" required />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Objet</label>
                  <input type="text" className="form-control" id="subject" placeholder="Sujet du message" required />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Votre message..." required></textarea>
                </div>
                
                <button type="submit" className="btn btn-submit w-100 text-uppercase fw-bold">
                  Envoyer
                </button>
              </form>

              <div className="response-time mt-3 text-center">
                L’artisan apportera une réponse sous <strong>48h</strong>
              </div>
            </section>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FicheArtisan;