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
                key={product.id}
                name={product.name}
                category={product.category} 
                imagePath={product.img.hdUrl}
                />
            )}
        </section>
        </>
    );
}

export default Results;