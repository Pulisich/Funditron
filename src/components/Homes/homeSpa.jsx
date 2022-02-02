import React from "react";
import Funditron from "../Funditron/funditron";
import Header from "../Header/header";
import { Link } from "react-router-dom";
import NavBarSpa from "../NavBar/nabVarSpa";




function HomeSpa() {

    return (
        <div>
             <Header/>

            <NavBarSpa/>
            <div className="homeParagraph">
            <p>
                ¡Bienvenidos al Funditrón v.1.0! 
                <br/>
                Una simple app diseñada para realentizar progresivamente una computadora mediante el consumo incremental de memoria, todo al alcance de un botón.
                <br/>
                ¡ATENCIÓN! : El creador no será responsable por cualquier consecuencia producto del uso de su aplicación.
            </p>

            <button> <Link to="/funditron" element={<Funditron/>}>¡VAMOS!</Link> </button>
            </div>
           
        </div>
    )
}

export default HomeSpa