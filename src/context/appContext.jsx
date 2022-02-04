import {React, createContext, useState } from "react";

// Lo que necesitaría es un context donde si yo hago click en el selector de idiomas pueda renderizar todos los componentes de ese idioma.
//El context tendría que ser: Aprieto lenguaje, ese lenguaje queda seteado como true, me lleva al componente home asociado a ese idioma, y de ahí puedo navegar en inglés

export const AppContext = createContext();

export function ContextProvider({children}){

    const [language, setLanguage]= useState(false)

    const english = ()=>{
        setLanguage(true)
    }

    const spanish =()=>{
        setLanguage(true)
    }
    return(
        <AppContext.Provider value={{english, spanish,language}}>
            {children}
        </AppContext.Provider>
    )
    

}

