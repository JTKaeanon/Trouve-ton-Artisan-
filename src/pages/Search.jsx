import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ArtisanCard from '../components/artisancard/ArtisanCard';
import artisansData from '../database/artisans.json'; 

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; 

  //  filter
  const filteredArtisans = artisansData.filter(artisan => {
    const lowerQuery = query.toLowerCase();
    return (
      artisan.name.toLowerCase().includes(lowerQuery) ||
      artisan.specialty.toLowerCase().includes(lowerQuery) ||
      artisan.location.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div className="page-search py-5">
      <div className="container">
        
        {/* tittle */}
        <h1 className="mb-4 text-center fw-bold" style={{ color: '#00497C' }}>
          R{'\u00e9'}sultats pour la recherche : <span style={{ color: '#82B864' }}>"{query}"</span>
        </h1>

        {/* list */}
        {filteredArtisans.length > 0 ? (
          <div className="row">
            {filteredArtisans.map(artisan => (
              <ArtisanCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        ) : (
          <div className="text-center mt-5">
            <p className="fs-5">Aucun artisan trouv{'\u00e9'} pour cette recherche.</p>
            <p className="text-muted">Essayez "Lyon", "Plombier", "Boulanger"...</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Search;