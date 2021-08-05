//Dependencies
import React from "react";
//Styles
import './Results.css'
//Components
import ProductCard from "./ProductCard/ProductCard";

const Results = () => {
    let products = [];
    for(let i= 0; i<=3; i++){
        products.push(<ProductCard/>);
    }
    return(
        <>
        <section className="ResultsGrid">
            {products}
        </section>
        </>
    );
}

export default Results;