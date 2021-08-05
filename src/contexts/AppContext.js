//Dependencies
import { createContext, useState } from "react"

//Context creation
export const AppContext = createContext();

//AppProvider definition
export default function AppProvider({children}){
    //States
    const [test, setTest] = useState('Test context')

    return(
        <AppContext.Provider value={{
            test   
        }}>
            {children}
        </AppContext.Provider>    

    );
}

