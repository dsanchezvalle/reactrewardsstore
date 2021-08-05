//Dependencies
import React from "react";
//Components
import PaginationArrows from '../components/PaginationArrows/PaginationArrows'
import ProductsPerPage from '../components/ProductsPerPage/ProductsPerPage'
//Styles
import './Footer.css'

const Footer = () => {
    return(
        <>
        <footer className="Footer">
            <ProductsPerPage />
            <PaginationArrows />
        </footer>
        </>
    );
}

export default Footer;