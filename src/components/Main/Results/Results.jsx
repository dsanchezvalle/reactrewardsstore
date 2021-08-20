//Dependencies
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
//Styles
import './Results.css'
//Context
import { AppContext } from "../../../contexts/AppContext";
import ResultsGrid from "./ResultsGrid/ResultsGrid";
//Components
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

const Results = () => {
    //Get filteredProducts and errorMessage from AppContext
    const {errorMessage, redeemHistory, isLoading, getCurrentPageProducts, getCurrentPageRedeemed} = useContext(AppContext);

    let currentPageProducts = getCurrentPageProducts();
    let currentPageRedeemed = getCurrentPageRedeemed();

    return(
        <>
        <Switch>
            <Route path="/history">
                <>
                {isLoading && <LoadingSpinner />}
                {(redeemHistory.length !== 0 && errorMessage.length === 0 && !isLoading) ? 
                    (
                        <ResultsGrid productList={currentPageRedeemed} redeemed={true} />                                
                    ):(
                        <section className='ResultsError'>
                            <p>{errorMessage}</p>
                        </section>
                    )
                }
                </>
            </Route>

            <Route path="/">
                <>
                {isLoading && <LoadingSpinner />}
                { errorMessage.length === 0 ?(
                    <ResultsGrid productList={currentPageProducts} redeemed={false}/> 
                ):(
                    <section className='ResultsError'>
                        <p>{errorMessage}</p>
                    </ section>
                )
                }
                </>
            </Route>
        </Switch> 
        </>
    );
}

export default Results;