//Dependencies
import { createContext, useState } from 'react'

//Context creation
export const AppContext = createContext();

//AppProvider definition
export default function AppProvider({children}){
    //States
    const [filteredProducts, setFilteredProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [redeemHistory, setRedeemHistory] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts,
            errorMessage,
            setErrorMessage,
            userInfo,
            setUserInfo,
            redeemHistory,
            setRedeemHistory,
            showFilters,
            setShowFilters,
            isLoading,
            setIsLoading  
        }}>
            {children}
        </AppContext.Provider>    

    );
}

