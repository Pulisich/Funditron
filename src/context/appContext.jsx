import {React, createContext, useState } from "react";

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

