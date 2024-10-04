import React from "react";

// ButtonComponent bileşeni
const ButtonComponent = ({ isFullscreen, toggleFullscreen }) => {
  return (
    <button
      onClick={toggleFullscreen}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        zIndex: 999,
      }}
    >
      {isFullscreen ? "Küçült" : "Tam Ekran"} {/* Buton metni dinamik */}
    </button>
  );
};

export default ButtonComponent;
