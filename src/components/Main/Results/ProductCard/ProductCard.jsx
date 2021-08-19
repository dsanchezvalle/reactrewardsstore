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
    const { userInfo, setUpdateUserInfo } = useContext(AppContext);
    
    let userPoints = userInfo.points;
    //Define productCard class according to its type
    let productCardClass = 'ProductCard ';
    if(redeemed){
        productCardClass += 'RedeemedProduct mask' 
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

    function pointsNeeded(points, productCost){
        return productCost - points;
    }

    function handleRedeemProductClick(clickedProductId, name){
        let newBody = {productId: clickedProductId}
        let menu = document.getElementById('UserInfo__CollapsibleCheck');
        menu.checked = false;
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
                            title: `It's yours!`,
                            text: `You have redeemed ${name} sucessfully`,
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

    //It formats the redemption date to present in Redeem History section
    function getRedemptionDate(dateString){
        let options = { year: 'numeric', month: 'short', day: 'numeric' };
        let date = new Date(dateString);
        let stringDate = date.toLocaleDateString('en-US', options);
        return stringDate;
    }

    return(
        <>
            <article className={productCardClass}>
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
                        <button className="ProductCard__RedeemBtn" onClick={()=> handleRedeemProductClick(productId, name)}>Redeem Now</button>    
                    </section> 
                </section>
                {redeemed&&
                <section className="ProductCard__RedeemedProductInfo">
                  <div className="ProductCard__RedeemedDateWrapper"><p className="ProductCard__RedeemedOn">Redeemed on:</p> <p className="ProductCard__RedeemedDate">{getRedemptionDate(createDate)||''}</p></div>
                  <div className="ProductCard__RedeemedPrice">{cost}<Coin className="ProductCard__Coin" /></div>
                </section>
                }  
            </article>
        </>
    );
}

export default ProductCard;