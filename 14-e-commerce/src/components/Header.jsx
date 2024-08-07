import React from 'react'
import "../css/Header.css"
import { FaBasketShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";




function Header() {
  return (
    <div style={{display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <div className='flex-row'>
            <img className="logo" src="./src/images/logo.png"/>
        </div>
        <div className='flex-row'>
            <input className='search-input' placeholder='🔎 Ara'/>
            <div>
                <MdSunny className='icon'/>
                {/* <FaMoon/ className='icon'> */}
                <FaBasketShopping className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header