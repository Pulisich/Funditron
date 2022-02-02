import React, { useState } from "react";
import Swal from 'sweetalert2'




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
        <div className="Funditron">
            <button onClick={executeFunditron}>EJECUTAR</button>

        </div>
    ) //OJO QUE FUNCIONA Y ES MUY RÁPIDO
}

export default Funditron