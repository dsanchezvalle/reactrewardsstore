//Dependencies
import { createContext, useState } from 'react'

//Context creation
export const AppContext = createContext();

//AppProvider definition
export default function AppProvider({children}){
    //States
    const [filteredProducts, setFilteredProducts] = useState([])
    
    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts   
        }}>
            {children}
        </AppContext.Provider>    

    );
}

