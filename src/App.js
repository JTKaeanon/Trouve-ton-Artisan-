import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer'; // Ajout de l'import
import ArtisanCard from './components/artisancard/ArtisanCard';
import artisansData from './data/artisans.json';
import './styles/main.scss';


function App() {
  const topArtisans = artisansData.filter(artisan => artisan.top === true);
  console.log("Artisans filtrés :", topArtisans);

  return (
    <div className="App">
      <Header />

      <main className="container-fluid p-0">
        {/* Section Instructions */}
        <div className="container py-4 text-center">
          <h2 className="fw-bold" style={{ color: '#00497C' }}>
            Comment trouver mon <span style={{ color: '#82B864' }}>artisan</span> ?
          </h2>
          <ul className="list-unstyled d-inline-block text-start mt-3" style={{ color: '#00497C' }}>
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
        <div className="container">
          <div className="row">
            {topArtisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;