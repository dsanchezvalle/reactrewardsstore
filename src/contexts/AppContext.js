//Dependencies
import { createContext, useState } from 'react'
//TestData
import {products} from '../utils/data'

//Context creation
export const AppContext = createContext();

//AppProvider definition
export default function AppProvider({children}){
    //States
    const [filteredProducts, setFilteredProducts] = useState(products)
    
    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts   
        }}>
            {children}
        </AppContext.Provider>    

    );
}

