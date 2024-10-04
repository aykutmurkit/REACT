import React, { useEffect, useRef } from "react";
import L from "leaflet"; // Leaflet kütüphanesi
import "leaflet/dist/leaflet.css"; // Leaflet'in CSS dosyası

const MapComponent = ({ isFullscreen }) => {
  const mapRef = useRef(null); // Harita div'i için referans
  const mapInstance = useRef(null); // Leaflet harita örneği

  // Harita oluşturma
  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([41.0082, 28.9784], 10); // İstanbul koordinatları ve zoom

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);
    }
  }, []);

  return (
    <div
      ref={mapRef}
      style={{
        width: isFullscreen ? "100vw" : "100px", // Tam ekran durumuna göre genişlik
        height: isFullscreen ? "400px" : "100px", // Tam ekran durumuna göre yükseklik
        border: "1px solid black", // Haritanın etrafında ince siyah kenarlık
        marginTop: "20px",
        zIndex: 99,
      }}
    />
  );
};

export default MapComponent;
