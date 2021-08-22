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
        totalRedeemed,
        languageCollection
    } = useContext(AppContext);

    //Language Collection destructuring
    const { productsPerPageString } = languageCollection;

    /* If showFilters is true then the Store is active (showing available products), 
    if not the Redeem History is active. */
    let storeIsActive = showFilters;
    
    //It defines the number of the first item of the batch according the current page
    function getStartItemInBatch(currentPage, itemsPerPage){
        return currentPage === 1 ? 1 : (((currentPage - 1)*itemsPerPage)+1);
    };
    
    //It defines the number of the last item of the batch according the current page
    function getEndItemInBatch(currentPage, itemsPerPage, maxPage, totalItems){
        return currentPage === maxPage ? totalItems : currentPage * itemsPerPage;
    };

    //Defining the first and last items of each page according the section: Store or Redeem
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
    
    //Define the total number of products according the section: Store or Redeem
    let totalItems = storeIsActive ? (totalProducts):(totalRedeemed);
    
    return (
        <>
            <p className="ProductsPerPage">
                {productsPerPageString?.(startItemInBatch, endItemInBatch, totalItems)}                
            </p>
        </>
    );
}

export default ProductsPerPage;