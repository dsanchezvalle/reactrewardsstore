//Dependencies
import React, { useContext } from 'react'
//Styles
import './ProductsPerPage.css'
//Context
import { AppContext } from '../../../../contexts/AppContext';

const ProductsPerPage = () => {
    //Context
    const { 
        showFilters, 
        currentProductsPage, 
        currentRedeemedPage, 
        productsPerPage, 
        redeemedPerPage,
        maxProductsPage,
        maxRedeemedPage,
        totalProducts,
        totalRedeemed  
    } = useContext(AppContext);
    
    /* If showFilters is true then the Store is active (showing available products), 
    if not the Redeem History is active. */
    let storeIsActive = showFilters;
    
    function getStartItemInBatch(currentPage, itemsPerPage){
        return currentPage === 1 ? 1 : (((currentPage - 1)*itemsPerPage)+1);
    };
    
    function getEndItemInBatch(currentPage, itemsPerPage, maxPage, totalItems){
        return currentPage === maxPage ? totalItems : currentPage * itemsPerPage;
    };

    let startItemInBatch = storeIsActive ? (
        getStartItemInBatch(currentProductsPage, productsPerPage)
    ):(
        getStartItemInBatch(currentRedeemedPage, redeemedPerPage)
    )

    let endItemInBatch = storeIsActive ? (
        getEndItemInBatch(currentProductsPage, productsPerPage, maxProductsPage, totalProducts)
    ):(
        getEndItemInBatch(currentRedeemedPage, redeemedPerPage, maxRedeemedPage, totalRedeemed)
    );
    
    let totalItems = storeIsActive ? (totalProducts):(totalRedeemed);

    return (
        <>
            <p className="ProductsPerPage">{startItemInBatch} - {endItemInBatch} of {totalItems} products</p>
        </>
    );
}

export default ProductsPerPage;