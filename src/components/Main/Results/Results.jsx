//Dependencies
import React, { useState, useContext } from "react";
//Styles
import './Results.css'
//Components
import ProductCard from "./ProductCard/ProductCard";
//Context
import { AppContext } from "../../../contexts/AppContext";

const Results = () => {
    const {filteredProducts} = useContext(AppContext);
    
    return(
        <>
        <section className="ResultsGrid">
            {filteredProducts.map(
                product => 
                <ProductCard
                key={product.id+product.name}
                name={product.name}
                category={product.category} 
                imagePath={product.img.hdUrl}
                cost={product.cost}
                />
            )}
        </section>
        </>
    );
}

export default Results;