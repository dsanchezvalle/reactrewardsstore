//Dependencies
import React, { useContext } from 'react'
//Styles
import './ProductCard.css'
//Icons
import { ReactComponent as BuyIcon } from "../../../../assets/images/buy.svg";
import { ReactComponent as BuyIconHover } from "../../../../assets/images/buy-white.svg";
import { ReactComponent as Coin } from "../../../../assets/images/coin.svg";
//Context
import { AppContext } from '../../../../contexts/AppContext'

const ProductCard = ({name, category, imagePath, cost}) => {
    //Get userInfo from AppContext
    const { userInfo } = useContext(AppContext);
    
    let userPoints = userInfo.points;
    //Check if current user can redeem a specific product 
    function userCanRedeem(points, productCost){
        return points>=productCost;
    }

    function pointsNeeded(points, productCost){
        return productCost - points;
    }

    return(
        <>
            <article className={`ProductCard ${userCanRedeem(userPoints, cost)?'RedeemableProduct':''}`}>
                {userCanRedeem(userPoints,cost)?(
                    <BuyIcon className="ProductCard__Icon"/>
                ):(
                    <div className="ProductCard__PointsNeeded">{`You need ${pointsNeeded(userPoints,cost)}`}<Coin className="ProductCard__Coin" /></div>
                )}
                <img className="ProductCard__Image" src={imagePath} alt={name} />
                <section className="ProductCard__Info">
                    <p className="ProductCard__Category">{category}</p>
                    <h3 className="ProductCard__Name">{name}</h3>
                    <section className="ProductCard__RedeemInfo">
                        <BuyIconHover className="ProductCard__IconHover"/>
                        <div className="ProductCard__RedeemCost">
                            <p>{cost}</p>
                            <Coin className="ProductCard__RedeemCoin"/>
                        </div>
                        <button className="ProductCard__RedeemBtn">Redeem Now</button>    
                    </section>
                    
                </section>
            </article>
        </>
    );
}

export default ProductCard;