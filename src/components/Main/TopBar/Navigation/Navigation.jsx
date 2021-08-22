//Dependencies
import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { AppContext } from '../../../../contexts/AppContext';
//Styles
import './Navigation.css'

const Navigation = () => {
    const {setRedeemHistory, setErrorHistoryMessage, setShowFilters, setIsLoading, languageCollection } = useContext(AppContext);
    //Language Collection destructuring
    const { storeLabel, historyLabel, errorGetHistoryMsg} = languageCollection;

    //Handle the redeem history request
    function handleGetRedeemHistoryClick(){
        //Fetch Redeem History from API
        async function getRedeemHistory(){
            setShowFilters(false);
            try{
                setIsLoading(true);
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
                //Reverse the response given to display last redeemed products first
                const reversedResponse = response.reverse();
                setIsLoading(false);
                setRedeemHistory(reversedResponse);
            }
            catch(err){
                setIsLoading(false);
                setErrorHistoryMessage(errorGetHistoryMsg);
            }
        }
        getRedeemHistory();
    }

    return(
        <>
        <nav className="Navigation">
            <ul className="Navigation__List">
                <NavLink exact className="Navigation__Item" activeClassName="Navigation__Item-Selected" to="/reactrewardsstore" onClick={()=>setShowFilters(true)}>{storeLabel}</NavLink>
                <NavLink exact className="Navigation__Item" activeClassName="Navigation__Item-Selected" to="/history" onClick={handleGetRedeemHistoryClick}>{historyLabel}</NavLink>
            </ul>
        </nav>
        </>
    );
}

export default Navigation;