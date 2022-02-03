import React, { useState } from "react";
import Swal from 'sweetalert2'
import Header from "../Header/header";
import NavBarEn from "../NavBar/nabVarEn";




function FunditronEng() {

    let [fundir, setFundir] = useState(true) //Mientras esté así el Funditrón no se va a ejecutar

    function timer() {
        setTimeout(excecute, 5000)
    }

    function excecute() {
        setFundir(true)

        while (fundir) {

            console.log("Ejecutando Funditrón")
        }
    }

    function initialize() {
        //Esta es la función del Funditrón OJO QUE FUNCIONA

        Swal.fire({

            title: 'Are you sure?',
            text: "This will certainly lead your computer to crash.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Execute Funditron',
            cancelButtonText: "Cancel"

        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire(
                    'The Funditron will excecute in 5 seconds',
                    'May the Force be with you',
                    'success',
                )

                console.log("Excecuting Funditron")
                timer()

            }

        })


    }

    function executeFunditron() {

        initialize()
    }

    return (
        <div>

            <Header />
            <NavBarEn />

            <div className="Funditron">

                <p>
                    Once you have clicked the execute button your computer will slow down over time
                    <br />
                    The more processing capacity your computer have the longer the time it will take for it to crash or to have to force a shut down
                </p>

                <button onClick={executeFunditron}><h1>EXECUTE</h1></button>

            </div>

        </div>
    ) //OJO QUE FUNCIONA Y ES MUY RÁPIDO
}

export default FunditronEng