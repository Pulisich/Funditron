import React from "react";
import FunditronEng from "../Funditron/funditronEng";
import Header from "../Header/header";
import NavBarEn from "../NavBar/nabVarEn";
import { Link } from "react-router-dom";

function HomeEng(){
    return (
        <div>
            <Header/>
            <NavBarEn/>
            <div className="homeParagraph">
            <p >
                Welcome to the Funditron v.1.0! A simple app designed to progresively slow down a computer via exponentially increasing memory consumption, all withing a button's reach!

                DISCLAIMER: The creator will not be responsible for any misuse of this application and will not be held accountable for any of its consequences.
            </p>

            <button className="NavButton"> <Link to="/funditron" element={<FunditronEng />}>LET'S GO!</Link> </button>     
               
        </div>
        </div>
    )
}

export default HomeEng