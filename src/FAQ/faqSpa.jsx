import React from "react";
import Header from "../components/Header/header";
import NavBarSpa from "../components/NavBar/nabVarSpa";
function FaqSpa() {

    return (
        <div>
            <Header />

            <NavBarSpa />
            <div className="faqParagraph">
                <h2 className="titleFaq">Preguntas frecuentes</h2>

                <h3>¿Qué usos tiene el Funditrón?</h3>
                <p>
                    Bueno, puede usarse para medir un estimado del rendimiento de una computadora si uno tiene en cuenta que a menor capacidad de procesamiento, menor tiempo antes de que eventualmente haya que apagarla o arriesgarse a un overheating del hardware.
                    <br />
                    También puede usarse como artilugio de bromas, como una forma de evitar tener que trabajar, etcétera.
                </p>


                <h3>¡¿POR QUÉ?!</h3>
                <p>
                Bueno siempre de chico jugaba al científico loco, me gustaban los robots y esas cosas y en realidad es simplemente una forma muy larga de decir estaba aburrido y tenía que practicar.
                </p>

                <h3>¿Por qué se ve feo?</h3>
                <p>
                    Porque no soy diseñador, soy programador, me gusta programar, quiero trabajar programando, no diseño cosas, programo cosas.
                </p>

                <h3>¿Se puede usar en celulares?</h3>
                <p>
                    <b>NO USAR EN CELULARES</b>
                    
                    <br />

                    En una computadora podría causar sobrecalentamiento, teóricamente, en celulares el sobrecalentamiento puede llevar a la explosión de la batería.

                </p>

                
                <h3>¿Por qué alguien debería contratarte como programador entonces?</h3>
                <p>
                   Porque la verdad me gusta mucho lo que estoy haciendo y quiero aprender a hacerlo mejor, y la mejor forma de aprender es haciendo.
                   <br/>
                   Estoy dispuesto a aprender lo que las empresas tengan que enseñarme, siempre y cuando estén dispuestas a invertir en mi persona yo me aseguraré de que esa inversión no sea en vano.
                   <br />
                   Además, mientras no tenga trabajo tendré que practicar más, y eso significa más proyectos, más complicados, y con más potencial de destruir la tierra :D.
                    <br />
                   

                </p>
                <h3><b> Salve el mundo: CONTRATENME</b></h3>


            </div>

        </div>
    )
}

export default FaqSpa