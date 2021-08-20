//Dependencies
import React, { useContext } from 'react';
//Styles
import './PaginationArrows.css'
//Images and Icons
import { ReactComponent as ArrowLeftActive } from "../../../../assets/images/arrow-left-active.svg";
import { ReactComponent as ArrowRightActive } from "../../../../assets/images/arrow-right-active.svg";
import { ReactComponent as ArrowLeftInactive } from "../../../../assets/images/arrow-left-inactive.svg";
import { ReactComponent as ArrowRightInactive } from "../../../../assets/images/arrow-right-inactive.svg";
//Context
import { AppContext } from '../../../../contexts/AppContext';

const PaginationArrows = () => {
    //Context
    const {
        showFilters, 
        nextProductsPage, 
        prevProductsPage, 
        nextRedeemedPage, 
        prevRedeemedPage, 
        currentProductsPage, 
        maxProductsPage, 
        currentRedeemedPage, 
        maxRedeemedPage } = useContext(AppContext);
    
    /* If showFilters is true then the Store is active (showing available products), 
    if not the Redeem History is active. */
    let storeIsActive = showFilters;

    //It defines if the current page is the last one in results
    function isLastPage([currentPage, maxPage]){
        return currentPage === maxPage;
    }

    //It defines if the current page is the first in results
    function isFirstPage([currentPage]){
        return currentPage === 1;
    }

    //It defines the page parameters depending on Store or Redeem History results are requested
    function getPageParameters(){
        let pageParameters = [];

        if(storeIsActive){
            pageParameters[0] = currentProductsPage;
            pageParameters[1] = maxProductsPage;
        }
        else{
            pageParameters[0] = currentRedeemedPage;
            pageParameters[1] = maxRedeemedPage;
        }
        return pageParameters   
    }
    
    //It defines if Rigth Arrow will be active or not according to current page
    function getRigthArrow(){     
        let parameters = getPageParameters();
        return isLastPage(parameters) ? 
            (
                <ArrowRightInactive className="InactiveArrow" onClick={()=>{storeIsActive ? nextProductsPage() : nextRedeemedPage()}} />
            ):(
                <ArrowRightActive className="ActiveArrow" onClick={()=>{storeIsActive ? nextProductsPage() : nextRedeemedPage()}} />
            )
    }

    //It defines if Left Arrow will be active or not according to current page
    function getLeftArrow(){     
        let parameters = getPageParameters();
        return isFirstPage(parameters) ? 
            (
                <ArrowLeftInactive className="InactiveArrow" onClick={()=>{storeIsActive ? prevProductsPage() : prevRedeemedPage()}} />
            ):(
                <ArrowLeftActive className="ActiveArrow" onClick={()=>{storeIsActive ? prevProductsPage() : prevRedeemedPage()}} />
            )
    }
    
    return(
        <>
        <p className="PaginationArrowsContainer">
            {getLeftArrow()}
            {getRigthArrow()}
        </p>
        </>
    );
}

export default PaginationArrows;