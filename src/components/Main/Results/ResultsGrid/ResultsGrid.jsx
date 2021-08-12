//Dependencies
import React from 'react'
//Styles
import './ResultsGrid.css'
//Components
import ProductCard from '../ProductCard/ProductCard';

const ResultsGrid = ({productList}) => {
    return(
        <>
            <section className="ResultsGrid">
                {productList.map(
                    product => 
                    <ProductCard
                    key={product._id+product.name}
                    productId={product._id}
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

export default ResultsGrid;