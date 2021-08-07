//Dependencies
import React from 'react'
//Styles
import './ProductCard.css'

const ProductCard = ({name, category, imagePath, cost}) => {
    let userPoints = 2200;
    //Check if current user can redeem a specific product 
    function userCanRedeem(points, productCost){
        return points>=productCost;
    }
    
    return(
        <>
            <article className="ProductCard">
            <img className="ProductCard__Image" src={imagePath} alt={name} />
            <section className="ProductCard__Info">
                <p className="ProductCard__Category">{category} - {userCanRedeem(userPoints,cost)?<span style={{color: "green"}}>Yes</span>:<span style={{color: "red"}}>No</span>}</p>
                <h3 className="ProductCard__Name">{name}</h3>
            </section>
            </article>
        </>
    );
}

export default ProductCard;