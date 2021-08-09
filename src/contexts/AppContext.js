//Dependencies
import { createContext, useEffect, useState } from 'react'

//Context creation
export const AppContext = createContext();

//AppProvider definition
export default function AppProvider({children}){
    //States
    const [filteredProducts, setFilteredProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [userInfo, setUserInfo] = useState({});

    useEffect(()=>{
        if(Object.keys(userInfo).length === 0){
            async function getUserInfo(){
                try{
                    const fetchedData = await fetch('https://coding-challenge-api.aerolab.co/user/me',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExNDkwNGQ5ZmMzODAwMjFmNjM4NDMiLCJpYXQiOjE2Mjg1MjI3NTZ9.9RRbOr2MKD1bfRKrqBzfeTf6NqH153GOgb0Wu0pDNQk'
                        },
                        method: 'GET'
                    }
                    );
                    const fetchedUserInfo = await fetchedData.json();
                    setUserInfo(fetchedUserInfo);
                }
                catch(err){
                    setErrorMessage('Whoops! We got an error while bringing your user information. Please, try again.')
                }
            }
            getUserInfo();
        }
    }, [userInfo]);

    return(
        <AppContext.Provider value={{
            filteredProducts,
            setFilteredProducts,
            errorMessage,
            setErrorMessage  
        }}>
            {children}
        </AppContext.Provider>    

    );
}

