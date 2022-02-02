import React from "react";
import NavBarSpa from './components/Header/NavBar/nabVarSpa';


function HomeSpa() {

    return (
        <div>
            <NavBarSpa/>
            <p className="homeParagraph">
                ¡Bienvenidos al Funditrón v.1.0! Una simple app diseñada para realentizar progresivamente una computadora mediante el consumo incremental de memoria, todo al alcance de un botón.

                ¡ATENCIÓN!: El creador no será responsable por cualquier consecuencia producto del uso de su aplicación.
            </p>

            <button> ¡VAMOS! </button>
        </div>
    )
}

export default HomeSpa