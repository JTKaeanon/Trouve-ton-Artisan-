import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import obligatoire
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Pour que ton burger fonctionne

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Le "Router" doit entourer toute l'App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);