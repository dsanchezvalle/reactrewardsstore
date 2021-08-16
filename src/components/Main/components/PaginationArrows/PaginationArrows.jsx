//Dependencies
import React, { useContext } from 'react';
//Styles
import './PaginationArrows.css'
//Images and Icons
import { ReactComponent as ArrowLeft } from "../../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/arrow-right.svg";
//Context
import { AppContext } from '../../../../contexts/AppContext';

const PaginationArrows = () => {
    //Context
    const {showFilters, nextProductsPage, prevProductsPage, nextRedeemedPage, prevRedeemedPage } = useContext(AppContext);
    
    /* If showFilters is true then the Store is active (showing available products), 
    if not the Redeem History is active. */
    let storeIsActive = showFilters;
    
    return(
        <>
        <p className="PaginationArrowsContainer">
            <ArrowLeft onClick={()=>{storeIsActive ? prevProductsPage() : prevRedeemedPage()}} />
            <ArrowRight onClick={()=>{storeIsActive ? nextProductsPage() : nextRedeemedPage()}} />
        </p>
        </>
    );
}

export default PaginationArrows;