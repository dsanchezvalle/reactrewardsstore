//Dependencies
import React, { useContext } from 'react'
import Swal from 'sweetalert2'
//Styles
import './ProductCard.css'
//Icons
import { ReactComponent as BuyIcon } from "../../../../assets/images/buy.svg";
import { ReactComponent as BuyIconHover } from "../../../../assets/images/buy-white.svg";
import { ReactComponent as Coin } from "../../../../assets/images/coin.svg";
//Context
import { AppContext } from '../../../../contexts/AppContext'

const ProductCard = ({productId, name, category, imagePath, cost, redeemed, createDate }) => {
    //Get userInfo from AppContext
    const { userInfo, setUpdateUserInfo, languageCollection, currentLanguage } = useContext(AppContext);
    
    //Language Collection destructuring
    const { redeemLabel, redeemedOnLabel, redeemSuccessTitle, redeemSuccessMsg, pointsNeededLabel } = languageCollection;
    
    //Define available points
    let userPoints = userInfo.points;
    
    /* Define productCard class according to its type:
    1. ProductCard: general product in Store
    2. RedeemedProduct: product in Redeem History
    3. RedeemableProduct: redeemable product in Store
    */
    let productCardClass = 'ProductCard ';
    if(redeemed){
        productCardClass += 'RedeemedProduct' 
    }
    else {
        if (userCanRedeem(userPoints, cost)){
            productCardClass += 'RedeemableProduct'
        }
    }
    
    //Check if current user can redeem a specific product 
    function userCanRedeem(points, productCost){
        return points>=productCost;
    }

    //Define the points needed to redeem a specific product if the user doesn't have enough
    function pointsNeeded(points, productCost){
        return productCost - points;
    }
    
    //Handle the product redemption when user clicks "Redeem now" button
    function handleRedeemProductClick(clickedProductId, name){
        let newBody = {productId: clickedProductId}
        //Hide dropdown menu if is active when redemption is taking place
        let menu = document.getElementById('UserInfo__CollapsibleCheck');
        menu.checked = false;
        //Double validation if user has enough points to redeem the product
        if(userPoints>=cost){
            async function redeemProduct(){
                try{
                    const fetchedData = await fetch('https://coding-challenge-api.aerolab.co/redeem',{
                        headers:{
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExNDkwNGQ5ZmMzODAwMjFmNjM4NDMiLCJpYXQiOjE2Mjg1MjI3NTZ9.9RRbOr2MKD1bfRKrqBzfeTf6NqH153GOgb0Wu0pDNQk'
                        },
                        method: 'POST',
                        body: JSON.stringify(newBody)
                    });
                    const response = await fetchedData.json();
                    if(response.message === "You've redeem the product successfully"){
                        Swal.fire({
                            title: redeemSuccessTitle,
                            text: redeemSuccessMsg?.(name),
                            icon: 'success',                            
                            customClass: {
                                confirmButton: 'PopUpBtn'
                            }
                        });
                    }
                }
                catch(err){
                    Swal.fire({
                        title: `Whoops!`,
                        text: "We got an error while redeeming the product. Please, try again.",
                        icon: 'error',                            
                        customClass: {
                            confirmButton: 'PopUpBtn'
                        }
                    });
                }
            }
            redeemProduct();
        }
        else{
            Swal.fire({
                title: `Whoops!`,
                text: "You don't have enough points to redeem this product. Try requesting more points.",
                icon: 'error',                            
                customClass: {
                    confirmButton: 'PopUpBtn'
                }
            });
        }
        setUpdateUserInfo(true);
    }

    //Format the redemption date to show it in Redeem History Section
    function getRedemptionDate(dateString){
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        let date = new Date(dateString);
        return date.toLocaleDateString(currentLanguage === 'en' ? 'en-US': 'es-CO', options);
    }

    return(
        <>
            <article className={productCardClass}>
                {userCanRedeem(userPoints,cost)?(
                    <BuyIcon className="ProductCard__Icon"/>
                ):(
                    <div className="ProductCard__PointsNeeded">{`${pointsNeededLabel} ${pointsNeeded(userPoints,cost)}`}<Coin className="ProductCard__Coin" /></div>
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
                        <button className="ProductCard__RedeemBtn" onClick={()=> handleRedeemProductClick(productId, name)}>{redeemLabel}</button>    
                    </section> 
                </section>
                {redeemed&&
                <section className="ProductCard__RedeemedProductInfo">
                  <div className="ProductCard__RedeemedDateWrapper"><p className="ProductCard__RedeemedOn">{redeemedOnLabel}</p> <p className="ProductCard__RedeemedDate">{getRedemptionDate(createDate)||''}</p></div>
                  <div className="ProductCard__RedeemedPrice">{cost}<Coin className="ProductCard__Coin" /></div>
                </section>
                }  
            </article>
        </>
    );
}

export default ProductCard;