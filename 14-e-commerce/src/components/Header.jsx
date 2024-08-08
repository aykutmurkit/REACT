import React from "react";
import { useState } from "react";
import "../css/Header.css";
import { FaBasketShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row">
        <img className="logo" onClick={()=>{navigate("/")}} src="./src/images/logo.png" style={{cursor:"pointer"}}/>
      </div>
      <div className="flex-row">
        <input className="search-input" placeholder="🔎 Ara" />
        <div>
          {theme ? (
            < FaMoon className="icon" onClick={changeTheme} />
          ) : (
            < MdSunny className="icon" onClick={changeTheme} />
          )}
          <FaBasketShopping className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
