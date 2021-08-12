//Dependencies
import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//Styles
import './Results.css'
//Components
import ProductCard from "./ProductCard/ProductCard";
//Context
import { AppContext } from "../../../contexts/AppContext";

const Results = () => {
    //Get filteredProducts and errorMessage from AppContext
    const {filteredProducts, errorMessage, redeemHistory, setRedeemHistory, setErrorMessage} = useContext(AppContext);
    
    //It handles the redeem history request
    function handleGetRedeemHistoryClick(){
        
        async function getRedeemHistory(){
            try{
                const fetchedData = await fetch('https://coding-challenge-api.aerolab.co/user/history',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExNDkwNGQ5ZmMzODAwMjFmNjM4NDMiLCJpYXQiOjE2Mjg1MjI3NTZ9.9RRbOr2MKD1bfRKrqBzfeTf6NqH153GOgb0Wu0pDNQk'
                        },
                        method: 'GET'
                    }
                    );
                const response = await fetchedData.json();
                setRedeemHistory(response);
            }
            catch(err){
                setErrorMessage('Whoops! We got an error requesting your redeem history. Please, try again.');
            }
        }
        getRedeemHistory();
    }

    return(
        <>        
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Store </Link>
                        </li>
                        <li>
                            <Link to="/history" onClick={handleGetRedeemHistoryClick}>Redeem History</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/history">
                        <>
                        <p>Your redeem history</p>
                        {redeemHistory.length === 0 && <p>You have not redeemed products yet.</p>}
                        {redeemHistory.length !== 0 && errorMessage.length === 0 ? 
                            (
                                <section className="ResultsGrid">
                                    {redeemHistory.map(
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
                            ):(
                                <section className='ResultsError'>
                                    <p>{errorMessage}</p>
                                </section>
                            )
                        }
                        </>
                    </Route>

                    <Route path="/">
                    { errorMessage.length === 0 ?(
                        <section className="ResultsGrid">
                            {filteredProducts.map(
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
                    ):(
                        <section className='ResultsError'>
                            <p>{errorMessage}</p>
                        </ section>
                    )
                    }
                    </Route>
               </Switch> 
            </Router>
        </>
    );
}

export default Results;