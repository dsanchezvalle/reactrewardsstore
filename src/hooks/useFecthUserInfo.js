//Dependencies
import { useEffect, useContext } from "react";
//Context
import { AppContext } from "../contexts/AppContext";

const useFetchUserInfo = () => {
    //Context
    const { userInfo, setUserInfo, setErrorMessage, updateUserInfo, setUpdateUserInfo } = useContext(AppContext);

    //Fetch userInfo
    useEffect(()=>{
        if(Object.keys(userInfo).length === 0 || updateUserInfo){ 
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
            setUpdateUserInfo(false);
        }
        
    }, [userInfo, setUserInfo, setErrorMessage, updateUserInfo, setUpdateUserInfo]);

}

export default useFetchUserInfo;