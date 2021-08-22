//Dependencies
import React from 'react'
//Styles
import './ResultsGrid.css'
//Components
import ProductCard from '../ProductCard/ProductCard';

const ResultsGrid = ({ productList, redeemed }) => {
    return(
        <>
            <section className={`ResultsGrid ${redeemed && 'RedeemHistory'}`}>
                {productList.map(
                    (product, index) => 
                    <ProductCard
                    key={index+product._id+product.name}
                    productId={product._id}
                    name={product.name}
                    category={product.category} 
                    imagePath={product.img.hdUrl}
                    cost={product.cost}
                    redeemed = {redeemed}
                    createDate = {product.createDate}
                    />
                )}
            </section>
        </>
    );
}

export default ResultsGrid;