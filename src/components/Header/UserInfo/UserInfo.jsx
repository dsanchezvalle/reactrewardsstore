//Dependencies 
import React, {useContext, useEffect} from 'react'
//Styles
import './UserInfo.css'
//Context
import { AppContext } from '../../../contexts/AppContext';
//Icons
import { ReactComponent as Coin} from '../../../assets/images/coin.svg'
import { ReactComponent as DropdownArrow} from '../../../assets/images/arrow-down-lg.svg'
//Constants
import { getPointsOptions } from '../../../utils/constants';

const UserInfo = () => {
    const{ userInfo, setUserInfo, setErrorMessage, redeemHistory, setRedeemHistory } = useContext(AppContext);

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

    //It handles the points request validating value exists in the three given options
    function handleGetPointsClick(e) {
        let requestedPoints = e.target.value;
        
        if(getPointsOptions.includes(requestedPoints)){
            async function getPoints(){
                let newBody = {amount: requestedPoints}
                try{
                const fetchedData = await fetch('https://coding-challenge-api.aerolab.co/user/points',{
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExNDkwNGQ5ZmMzODAwMjFmNjM4NDMiLCJpYXQiOjE2Mjg1MjI3NTZ9.9RRbOr2MKD1bfRKrqBzfeTf6NqH153GOgb0Wu0pDNQk'
                    },
                    method: 'POST',
                    body: JSON.stringify(newBody)
                });
                const response = await fetchedData.json();
                }
                    catch(err){
                    setErrorMessage('Whoops! We got an error requesting your points. Please, try again.')
                }
            }
            getPoints();
        }
    }

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
                            {getPointsOptions.map((optionItem)=>
                                <li 
                                key={`k-${optionItem}`} 
                                className="ChildrenDropdown__Option"
                                value={optionItem}
                                onClick={handleGetPointsClick}
                                >
                                    {optionItem}
                                </li>    
                            )}
                        </ul>
                    </li>
                    <li className="UserInfo__DropdownOption" onClick={handleGetRedeemHistoryClick}>See your Redeem History</li>
                </ul>
            
            </div>
        </section>
    );
}

export default UserInfo;