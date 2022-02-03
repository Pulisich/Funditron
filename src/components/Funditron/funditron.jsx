import React, { useState } from "react";
import Swal from 'sweetalert2'
import Header from "../Header/header";
import NavBarSpa from "../NavBar/nabVarSpa";




function Funditron() {

    let [fundir, setFundir] = useState(true) //Mientras esté así el Funditrón no se va a ejecutar

    function timer() {
        setTimeout(excecute, 5000)
    }

    function excecute(){
        setFundir(true)
                
                 while (fundir) {
        
                     console.log("Ejecutando Funditrón")
                 }
    }

    function initialize() {
        //Esta es la función del Funditrón OJO QUE FUNCIONA

        Swal.fire({

            title: '¿Seguro?',
            text: "Esto va a hacer que ésta computadora se realentice al punto de no funcionar.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ejecutar Funditrón',
            cancelButtonText: "Cancelar"

        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire(
                    'El Funditrón se ejecutará en 5 segundos',
                    'Que la Fuerza te acompañe.',
                    'success',
                )

                console.log("Ejecutando Funditrón")
                timer()

            }

        })

       
    }

    function executeFunditron() {
    
        initialize()
    }

    return (
    <div>
        
        <Header/>
        <NavBarSpa/>
        
        <div className="Funditron">
           
            <p> Una vez que hagas click en ejecutar el Funditrón irá realentizando tu computadora poco a poco. <br/>
            A mayor capacidad de memoria más tiempor le llevará realentizar la computadora al punto de tener que forzar el apagado. </p>

            <button onClick={executeFunditron}><h1>EJECUTAR</h1></button>

        </div>
     
     </div>   
    ) //OJO QUE FUNCIONA Y ES MUY RÁPIDO
}

export default Funditron