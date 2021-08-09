//Dependencies 
import React, {useContext, useEffect} from 'react'
//Styles
import './UserInfo.css'
//Context
import { AppContext } from '../../../contexts/AppContext';
//Icons
import { ReactComponent as Coin} from '../../../assets/images/coin.svg'

const UserInfo = () => {
    const{ userInfo, setUserInfo, setErrorMessage } = useContext(AppContext);

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
    }, [userInfo, setUserInfo, setErrorMessage]);

    return(
        <section className="UserInfo">
            <p className="UserInfo__Name">{userInfo.name}</p>
            <div className="UserInfo__PointsWrapper">
                {userInfo.points} 
                <Coin className="UserInfo__Coin" />
            </div>
        </section>
    );
}

export default UserInfo;