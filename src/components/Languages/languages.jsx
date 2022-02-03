import React from "react";
import { Link } from "react-router-dom";
import HomeEng from "../Homes/homeEng";
import HomeSpa from "../Homes/homeSpa";


function LanguageSelector() {
    return (

        <div className="Languages">
            <h1>Seleccione un idioma || Select a language</h1>

            <Link to="/home-spa" element={<HomeSpa />}>
                <button className="languageButton">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">Español</span>
                </button>
            </Link>
            <Link to="/home-eng" element={<HomeEng/>}>
                <button className="languageButton">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">English</span>
                </button>
            </Link>

            <Link to="/home-spa" element={<HomeSpa />}>
                <button className="languageButton">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front text">Portugueis (todavia nao)</span>
                </button>
            </Link>


        </div>
    )
}

export default LanguageSelector
