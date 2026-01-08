import React from 'react';
import ArtisanCard from '../components/artisancard/ArtisanCard';
import artisansData from '../data/artisans.json'; 

const Home = () => {
  const topArtisans = artisansData.filter(artisan => artisan.top === true);

  return (
    <main className="container-fluid p-0">
      
      {/* Section Instructions */}
      <div className="container py-4 text-center">
        
        {/* MODIFICATION ICI : Ajout de mb-4 pour l'espace sous le titre */}
        <h2 className="fw-bold mb-4" style={{ color: '#00497C' }}>
          Comment trouver mon <span style={{ color: '#82B864' }}>artisan</span> ?
        </h2>
        
        <ul className="list-unstyled d-inline-block text-start" style={{ color: '#00497C' }}>
          <li>Étape 1 : Choisir la catégorie d'artisan dans le menu</li>
          <li>Étape 2 : Choisir un artisan</li>
          <li>Étape 3 : Le contacter via le formulaire de contact</li>
          <li>Étape 4 : Une réponse sera apportée sous <span style={{ color: '#CD2C2E', fontWeight: 'bold' }}>48h</span></li>
        </ul>
      </div>

      {/* Bannière Bleue */}
      <div className="banner-blue">
        <h1 className="display-4 fw-bold">NOS ARTISANS DU MOIS</h1>
      </div>

      {/* Grille des Artisans */}
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