//Dependencies
import React from "react";
//Styles
import './TopBar.css'
//Components
import ProductsPerPage from '../components/ProductsPerPage/ProductsPerPage'
import Filters from "./Filters/Filters";
import PaginationArrows from "../components/PaginationArrows/PaginationArrows";
import Navigation from "./Navigation/Navigation";

const TopBar = () => {
    return(
        <>
        <Navigation />
        <section className="TopBar">
            <ProductsPerPage />
            <Filters />
            <PaginationArrows />
        </section>
        </>
    );
}

export default TopBar;