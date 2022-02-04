import React from "react";
import { Link } from "react-router-dom";
import FaqEng from "../FAQ/faqEng";
import FunditronEng from "../Funditron/funditronEng";
import HomeEng from "../Homes/homeEng";
import LanguageSelector from "../Languages/languages";

function NavBarEn(){

    return(
        <nav className="Nav">
            
            <button className="NavButton"><Link to="/home-eng" element={<HomeEng/>}>Home</Link></button>
            <button className="NavButton"><Link to="/funditron-en" element={<FunditronEng/>}>Fry</Link></button>
            <button className="NavButton"><Link to="/faq-eng" element={<FaqEng/>}>FAQ</Link></button>
            <button className="NavButton"> <Link to="/" element={<LanguageSelector/>}>SPA-PT</Link></button>


        </nav>
    )

}

export default NavBarEn