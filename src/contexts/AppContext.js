//Dependencies
import { createContext, useState } from 'react'
//Hooks
import usePagination from '../hooks/usePagination';
//Constants
import { itemsPerPage } from '../utils/constants'

//Context creation
export const AppContext = createContext();

//AppProvider
export default function AppProvider({children}){
    //States
    const [filteredProducts, setFilteredProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [errorHistoryMessage, setErrorHistoryMessage] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [redeemHistory, setRedeemHistory] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [updateUserInfo, setUpdateUserInfo] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [languageCollection, setLanguageCollection] = useState({});

    //Constants
    const productsPerPage = itemsPerPage;
    const redeemedPerPage = itemsPerPage;
    
    //Pagination Custom Hooks
    const [
        nextProductsPage, 
        prevProductsPage, 
        jumpProductsPage, 
        getCurrentPageProducts, 
        currentProductsPage, 
        maxProductsPage,
        setProductsCurrentPage
    ] = usePagination(filteredProducts,itemsPerPage);
    const [
        nextRedeemedPage, 
        prevRedeemedPage, 
        jumpRedeemedPage, 
        getCurrentPageRedeemed, 
        currentRedeemedPage, 
        maxRedeemedPage,
        setRedeemedCurrentPage
    ] = usePagination(redeemHistory, itemsPerPage);
    
    //Total amount of available and redeemed products
    let totalProducts = filteredProducts.length;
    let totalRedeemed = redeemHistory.length;

    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts,
            errorMessage,
            setErrorMessage,
            errorHistoryMessage, 
            setErrorHistoryMessage,
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
            jumpProductsPage,
            jumpRedeemedPage,
            totalProducts,
            totalRedeemed,
            setProductsCurrentPage,
            setRedeemedCurrentPage,
            updateUserInfo, 
            setUpdateUserInfo, 
            currentLanguage,
            setCurrentLanguage,
            languageCollection, 
            setLanguageCollection            
        }}>
            {children}
        </AppContext.Provider>    

    );
}