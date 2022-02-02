import React from "react";
import { Link } from "react-router-dom";
import HomeSpa from "../Homes/homeSpa";


function LanguageSelector(){
    return(

        <div className="Languages">
            <h1>Seleccione un idioma || Select a language</h1>
            <Link to="/home-spa" element={<HomeSpa/>}><button>Español</button></Link>
            <button>English</button>
            <button>Portugueis</button>

        </div>
    )
}

export default LanguageSelector
