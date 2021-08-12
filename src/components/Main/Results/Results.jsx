//Dependencies
import React, { useContext } from "react";
//Styles
import './Results.css'
//Components
import ProductCard from "./ProductCard/ProductCard";
//Context
import { AppContext } from "../../../contexts/AppContext";

const Results = () => {
    //Get filteredProducts and errorMessage from AppContext
    const {filteredProducts, errorMessage, redeemHistory} = useContext(AppContext);
    
    return(
        <>        
            { errorMessage.length === 0 ?(
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
            ):(
                <section className='ResultsError'>
                    <p>{errorMessage}</p>
                </ section>
            )
            }
        </>
    );
}

export default Results;