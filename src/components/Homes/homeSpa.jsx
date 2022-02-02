import React from "react";
import Header from "../Header/header";
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
            </div>
            <button> ¡VAMOS! </button>
        </div>
    )
}

export default HomeSpa