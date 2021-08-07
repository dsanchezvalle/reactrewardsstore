//Dependencies
import React from 'react'
//Styles
import './ProductCard.css'

const ProductCard = ({name, category, imagePath}) => {
    return(
        <>
            <article className="ProductCard">
            <img className="ProductCard__Image" src={imagePath} alt={name} />
            <section className="ProductCard__Info">
                <p className="ProductCard__Category">{category}</p>
                <h3 className="ProductCard__Name">{name}</h3>
            </section>
            </article>
        </>
    );
}

export default ProductCard;