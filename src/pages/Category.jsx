import React from 'react';
import { useParams } from 'react-router-dom';
import ArtisanCard from '../components/artisancard/ArtisanCard';
import artisansData from '../database/artisans.json'; 

const Category = () => {
  const { category } = useParams();

  const categoryNames = {
    "batiment": "B\u00e2timent",     // Bâtiment
    "services": "Services",
    "fabrication": "Fabrication",
    "alimentation": "Alimentation"
  };

  const currentCategoryName = categoryNames[category];

 
  const artisans = artisansData.filter(artisan => artisan.category === currentCategoryName);

  return (
    <div className="page-category py-5">
      <div className="container">
        
        {/* TITTLE*/}
        <h1 className="mb-5 text-center fw-bold" style={{ color: '#00497C' }}>
            Les artisans de la cat{'\u00e9'}gorie <span style={{ color: '#82B864' }}>{currentCategoryName}</span>
        </h1>

        {/* GRID ARTISANS */}
        {artisans.length > 0 ? (
          <div className="row">
            {artisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">
            <p>Aucun artisan trouv{'\u00e9'} pour cette cat{'\u00e9'}gorie.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Category;