import React, { useState } from "react";
import Swal from 'sweetalert2'




function Funditron() {

    let [fundir, setFundir] = useState(false) //Mientras esté así el Funditrón no se va a ejecutar

    function executeFunditron() { //Esta es la función del Funditrón OJO QUE FUNCIONA
        let timerInterval
        Swal.fire({
            title: '¡Funditrón activado!',
            html: 'Inicializando en <b></b>.',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
                setFundir(true)
                while (fundir) {
                    console.log("Ejecutando Funditrón")
    
                }
            }
        })
    }

    return (
        <div>
            <button onClick={executeFunditron}>EJECUTAR</button>

        </div>
    ) //OJO QUE FUNCIONA Y ES MUY RÁPIDO
}

export default Funditron