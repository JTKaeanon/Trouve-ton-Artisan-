import React from 'react';
import Header from './components/header/header';
import './styles/main.scss';

function App() {
  return (
   <>
      <Header />
      {/* On ajoute 'pt-5' ou une marge personnalisée pour descendre le contenu */}
      <div className="container mt-header pt-5">
        <h1 className="text-primary fw-bold text-center">Trouve ton artisan</h1>
        <p className="text-center">Avec la région Auvergne-Rhône-Alpes</p>
      </div>
    </>
  );
}
export default App;