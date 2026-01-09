import React from 'react';
import ArtisanCard from '../components/artisancard/ArtisanCard';
import artisansData from '../database/artisans.json'; 

const Home = () => {
  // TOP ARTISANS
  const topArtisans = artisansData.filter(artisan => artisan.top === true);

  return (
    <main className="container-fluid p-0">
      
      {/* HOW TO */}
      <div className="container py-4 text-center">
        <h2 className="fw-bold" style={{ color: '#00497C' }}>
          Comment trouver mon <span style={{ color: '#82B864' }}>artisan</span> ?
        </h2>
        <ul className="list-unstyled d-inline-block text-start mt-3" style={{ color: '#00497C' }}>
          <li>&Eacute;tape 1 : Choisir la cat&eacute;gorie d'artisan dans le menu</li>
          <li>&Eacute;tape 2 : Choisir un artisan</li>
          <li>&Eacute;tape 3 : Le contacter via le formulaire de contact</li>
          <li>&Eacute;tape 4 : Une r&eacute;ponse sera apport&eacute;e sous <span style={{ color: '#CD2C2E', fontWeight: 'bold' }}>48h</span></li>
        </ul>
      </div>

      
      <div className="banner-blue">
        <h1 className="display-4 fw-bold">NOS ARTISANS DU MOIS</h1>
      </div>

      {/* GRID TOP ARTISANTS */}
      <div className="container mb-5">
        <div className="row">
          {topArtisans.map(artisan => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default Home;