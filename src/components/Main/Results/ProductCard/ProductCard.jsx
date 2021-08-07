//Dependencies
import React from 'react'

//Styles
import './ProductCard.css'

const ProductCard = ({name, category, imagePath}) => {
    return(
        <>
            <article className="ProductCard">
                <h3>{name}</h3>
                <p>{category}</p>
                <img src={imagePath} alt={name} />
            </article>
        </>
    );
}

export default ProductCard;