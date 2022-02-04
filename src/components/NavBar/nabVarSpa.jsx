import React from "react";
import { Link } from "react-router-dom";
import FaqSpa from "../FAQ/faqSpa";
import Funditron from "../Funditron/funditron";
import HomeSpa from "../Homes/homeSpa";
import LanguageSelector from "../Languages/languages";

function NavBarSpa(){

    return(
        <nav className="Nav">
            
            <button className="NavButton"><Link to="/home-spa" element={<HomeSpa/>}>Home</Link></button>
            <button className="NavButton"><Link to="/funditron" element={<Funditron/>}>Fundir</Link></button>
            <button className="NavButton"><Link to="/faq-spa" element={<FaqSpa/>}>FAQ</Link></button>
            <button className="NavButton"> <Link to="/" element={<LanguageSelector/>}>EN-PT</Link></button>


        </nav>
    )

}

export default NavBarSpa