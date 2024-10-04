import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'ol/ol.css'; // OpenLayers CSS dosyasını burada ekleyin

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
