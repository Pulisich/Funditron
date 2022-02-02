import React from "react";
import { Link } from "react-router-dom";
import Funditron from "../Funditron/funditron";
import HomeSpa from "../Homes/homeSpa";
import LanguageSelector from "../Languages/languages";

function NavBarSpa(){

    return(
        <nav className="Nav">
            <button><Link to="/home-spa" element={<HomeSpa/>}>Home</Link></button>
            <button><Link to="/funditron" element={<Funditron/>}>Fundir</Link></button>
            <button>FAQ</button>
           <button> <Link to="/" element={<LanguageSelector/>}>EN-PT</Link></button>


        </nav>
    )

}

export default NavBarSpa