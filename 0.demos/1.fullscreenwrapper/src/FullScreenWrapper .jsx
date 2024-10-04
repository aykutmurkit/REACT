import React, { useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent"; // ButtonComponent import

// FullScreenWrapper bileşeni
const FullScreenWrapper = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false); // Tam ekran durumu
  const squareRef = useRef(); // Kırmızı kare referansı

  // Tam ekran geçiş işlevi
  const toggleFullscreen = () => {
    const square = squareRef.current;

    if (isFullscreen) {
      // Tam ekrandan çık
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false); // Durumu güncelle
    } else {
      // Tam ekrana geç
      if (square.requestFullscreen) {
        square.requestFullscreen();
      } else if (square.mozRequestFullScreen) {
        square.mozRequestFullScreen();
      } else if (square.webkitRequestFullscreen) {
        square.webkitRequestFullscreen();
      } else if (square.msRequestFullscreen) {
        square.msRequestFullscreen();
      }
      setIsFullscreen(true); // Durumu güncelle
    }
  };

  return (
    <div
      ref={squareRef}
      style={{
        position: isFullscreen ? "fixed" : "absolute",
        top: isFullscreen ? 0 : "50%",
        left: isFullscreen ? 0 : "50%",
        width: isFullscreen ? "100vw" : "400px",
        height: isFullscreen ? "100vh" : "400px",
        backgroundColor: "transparent",
        border: "20px solid red",
        transform: isFullscreen ? "none" : "translate(-50%, -50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Buton bileşenini entegre ediyoruz */}
      <ButtonComponent
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
      
      {/* Çocuk bileşenler burada gösterilir (örneğin harita) */}
      {children(isFullscreen)}
    </div>
  );
};

export default FullScreenWrapper;
