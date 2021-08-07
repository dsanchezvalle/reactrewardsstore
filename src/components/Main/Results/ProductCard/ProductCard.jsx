//Dependencies
import React from 'react'
//Styles
import './ProductCard.css'
//Icons
import { ReactComponent as BuyIcon } from "../../../../assets/images/buy.svg";
import { ReactComponent as BuyIconHover } from "../../../../assets/images/buy-hover.svg";
import { ReactComponent as Coin } from "../../../../assets/images/coin.svg";

const ProductCard = ({name, category, imagePath, cost}) => {
    let userPoints = 500;
    //Check if current user can redeem a specific product 
    function userCanRedeem(points, productCost){
        return points>=productCost;
    }

    function pointsNeeded(points, productCost){
        return cost - points;
    }

    return(
        <>
            <article className="ProductCard">
                {userCanRedeem(userPoints,cost)?(
                    <BuyIcon className="ProductCard__Icon"/>
                ):(
                    <div className="ProductCard__Icon ProductCard__PointsNeeded">{`You need ${pointsNeeded(userPoints,cost)}`}<Coin /></div>
                )}
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