//Dependencies
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AppContext } from '../../../../contexts/AppContext';
//Styles
import './Navigation.css'

const Navigation = () => {
    const {setRedeemHistory, setErrorMessage, setShowFilters} = useContext(AppContext);
    //It handles the redeem history request
    function handleGetRedeemHistoryClick(){
        
        async function getRedeemHistory(){
            setShowFilters(false);
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
        <nav>
            <ul>
                <li>
                    <Link to="/" onClick={()=>setShowFilters(true)}>Store</Link>
                </li>
                <li>
                    <Link to="/history" onClick={handleGetRedeemHistoryClick}>Redeem History</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Navigation;