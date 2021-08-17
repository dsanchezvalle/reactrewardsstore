//Dependencies
import { createContext, useState } from 'react'
//Hooks
import usePagination from '../hooks/usePagination';

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
    const [productsPerPage, setProductsPerPage] = useState(16);
    const [redeemedPerPage, setRedeemedPerPage] = useState(16);
    const [
        nextProductsPage, 
        prevProductsPage, 
        jumpProductsPage, 
        getCurrentPageProducts, 
        currentProductsPage, 
        maxProductsPage
    ] = usePagination(filteredProducts,16);
    const [
        nextRedeemedPage, 
        prevRedeemedPage, 
        jumpRedeemedPage, 
        getCurrentPageRedeemed, 
        currentRedeemedPage, 
        maxRedeemedPage
    ] = usePagination(redeemHistory,16);
    
    let totalProducts = filteredProducts.length;
    let totalRedeemed = redeemHistory.length;

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
            setIsLoading,
            nextProductsPage, 
            prevProductsPage,
            getCurrentPageProducts, 
            currentProductsPage, 
            maxProductsPage,
            nextRedeemedPage, 
            prevRedeemedPage, 
            getCurrentPageRedeemed, 
            currentRedeemedPage, 
            maxRedeemedPage,
            productsPerPage,
            redeemedPerPage,
            totalProducts,
            totalRedeemed            
        }}>
            {children}
        </AppContext.Provider>    

    );
}

