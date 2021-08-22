//Dependencies
import React, { useContext } from "react";
//Styles
import './TopBar.css'
//Components
import ProductsPerPage from '../components/ProductsPerPage/ProductsPerPage'
import Filters from "./Filters/Filters";
import PaginationArrows from "../components/PaginationArrows/PaginationArrows";
import Navigation from "./Navigation/Navigation";
//Context
import { AppContext } from "../../../contexts/AppContext";

const TopBar = () => {
    //If Redeem History is active filters won't be shown
    const {showFilters} = useContext (AppContext);

    return(
        <>
        <Navigation />
        <section className="TopBar">
            <ProductsPerPage />
            {showFilters && <Filters />}
            <PaginationArrows />
        </section>
        </>
    );
}

export default TopBar;