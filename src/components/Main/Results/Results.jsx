//Dependencies
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
//Styles
import './Results.css'
//Context
import { AppContext } from "../../../contexts/AppContext";
import ResultsGrid from "./ResultsGrid/ResultsGrid";

const Results = () => {
    //Get filteredProducts and errorMessage from AppContext
    const {filteredProducts, errorMessage, redeemHistory} = useContext(AppContext);

    return(
        <>
        <Switch>
            <Route path="/history">
                <>
                <p>Your redeem history</p>
                {redeemHistory.length === 0 && <p>You have not redeemed products yet.</p>}
                {redeemHistory.length !== 0 && errorMessage.length === 0 ? 
                    (
                        <ResultsGrid productList={redeemHistory} />                                
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
                    <ResultsGrid productList={filteredProducts} /> 
                ):(
                    <section className='ResultsError'>
                        <p>{errorMessage}</p>
                    </ section>
                )
                }
            </Route>
        </Switch> 
        </>
    );
}

export default Results;