//Dependencies 
import React, {useContext, useEffect} from 'react'
//Styles
import './UserInfo.css'
//Context
import { AppContext } from '../../../contexts/AppContext';
//Icons
import { ReactComponent as Coin} from '../../../assets/images/coin.svg'
import { ReactComponent as DropdownArrow} from '../../../assets/images/arrow-down-lg.svg'

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
            <div className="UserInfo__PointsWrapper">
                {userInfo.points} 
                <Coin className="UserInfo__Coin" />
            </div>
            <div className="User__InfoMenu">
                <p className="UserInfo__Name">{userInfo.name}</p>
                <input type="checkbox" className="UserInfo__CollapsibleCheck" id="UserInfo__CollapsibleCheck" />
                <label className="UserInfo__ArrowWrapper" htmlFor="UserInfo__CollapsibleCheck">
                    <DropdownArrow className="UserInfo__Arrow"/>    
                </label>
                <ul className="UserInfo__DropdownWrapper">
                    <li className="UserInfo__DropdownOption" id="MorePoints">
                        <input type="checkbox" id="ChildrenDropdown__CollapsibleCheck" className="ChildrenDropdown__CollapsibleCheck" />
                        <label htmlFor="ChildrenDropdown__CollapsibleCheck" className="ChildrenDropdown__GetMorePoints">
                            <p>Get More points</p>
                            <DropdownArrow className="ChildrenDropdown__Arrow"/>
                        </label>
                        <ul className="ChildrenDropdown__OptionWrapper">
                            <li className="ChildrenDropdown__Option">1000</li>
                            <li className="ChildrenDropdown__Option">5000</li>
                            <li className="ChildrenDropdown__Option">7500</li>
                        </ul>
                    </li>
                    <li className="UserInfo__DropdownOption">See your Redeem History</li>
                </ul>
            
            </div>
        </section>
    );
}

export default UserInfo;