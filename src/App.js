import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './styles/main.scss';

// Pages
import Home from './pages/Home';
import FicheArtisan from './pages/FicheArtisan'; // <--- 1. AJOUTE L'IMPORT ICI

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 2. DÉCOMMENTE OU AJOUTE CETTE LIGNE : */}
        <Route path="/artisan/:id" element={<FicheArtisan />} />
        
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;