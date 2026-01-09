import React from 'react';
import { Routes, Route } from 'react-router-dom';

// IMPORT PAGE + COMPONENTS
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home';
import FicheArtisan from './pages/FicheArtisan';
import Search from './pages/Search';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Header everywhere */}
      <Header />

      <Routes>
        {/* Route Accueil */}
        <Route path="/" element={<Home />} />

        {/* Route Fiche Artisan */}
        <Route path="/artisan/:id" element={<FicheArtisan />} />

        {/* Route Catégorie  */}
        <Route path="/category/:category" element={<Category />} />

        {/* Route search  */}
        <Route path="/search" element={<Search />} />

        {/* Route 404  */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;