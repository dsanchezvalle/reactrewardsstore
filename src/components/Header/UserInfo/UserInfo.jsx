//Dependencies 
import React, {useContext} from 'react'
import Swal from 'sweetalert2'
//Styles
import './UserInfo.css'
//Context
import { AppContext } from '../../../contexts/AppContext';
//Icons
import { ReactComponent as Coin} from '../../../assets/images/coin.svg'
import { ReactComponent as DropdownArrow} from '../../../assets/images/arrow-down-lg.svg'
//Constants
import { getPointsOptions } from '../../../utils/constants';
//Hooks
import useFetchUserInfo from '../../../hooks/useFecthUserInfo';

const UserInfo = () => {
    //Context
    const { userInfo, setUpdateUserInfo, languageCollection } = useContext(AppContext);
    //Custom Hook to fetch userInfo
    useFetchUserInfo();
    //Language Collection destructuring
    const {pointsSuccessTitle, pointsSuccessMsg, morePointsMsg} = languageCollection;

    //Handle click on the user menu to get more points
    function handlePointsWrapperClick() {
        let menu = document.getElementById('UserInfo__CollapsibleCheck');
        menu.checked = !menu.checked;
    }

    //Handle the points request validating value exists in the three given options
    function handleGetPointsClick(pointsToRedeem) {
        let requestedPoints = pointsToRedeem;
        let menu = document.getElementById('UserInfo__CollapsibleCheck');
        
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
                    //Modal to confirm points have been updated or not
                    if(response.message === 'Points Updated'){
                        Swal.fire({
                            title: pointsSuccessTitle,
                            text: pointsSuccessMsg(pointsToRedeem, response['New Points']),
                            icon: 'success',                            
                            customClass: {
                                confirmButton: 'PopUpBtn'
                            }
                        });
                        menu.checked = false;
                    }
                }
                    catch(err){
                    Swal.fire({
                        title: `Whoops!`,
                        text: "We got an error requesting your points. Please, try again.",
                        icon: 'error',                            
                        customClass: {
                            confirmButton: 'PopUpBtn'
                        }
                    });
                    //Hide dropdown menu
                    menu.checked = false;
                }
            }
            getPoints();
        }
        else{
            Swal.fire({
                title: `Whoops!`,
                text: "You can not request that amount of points. Please, try again.",
                icon: 'error',                            
                customClass: {
                    confirmButton: 'PopUpBtn'
                }
            });    
        }
        setUpdateUserInfo(true);
    }

    return(
        <section className="UserInfo">
            <p className="UserInfo__Name">{userInfo.name}</p>
            <div className="User__InfoMenu">
                <div className="UserInfo__PointsWrapper" onClick={handlePointsWrapperClick}>
                    {userInfo.points} 
                    <Coin className="UserInfo__Coin" />
                    <input type="checkbox" className="UserInfo__CollapsibleCheck" id="UserInfo__CollapsibleCheck" />
                    <label className="UserInfo__ArrowWrapper" htmlFor="UserInfo__CollapsibleCheck">
                        <DropdownArrow className="UserInfo__Arrow"/>    
                    </label>
                    <ul className="UserInfo__DropdownWrapper">
                        <li className="UserInfo__DropdownOption" id="MorePoints">
                            <p>{morePointsMsg}</p>
                            <ul className="MorePoints__OptionWrapper">
                                {getPointsOptions.map((optionItem)=>
                                    <li 
                                    key={`k-${optionItem}`} 
                                    value={optionItem}
                                    onClick={() => handleGetPointsClick(optionItem)}
                                    >
                                    <div className="MorePoints__Option">{optionItem}<Coin className="UserInfo__Coin" /></div>                                    
                                    </li>    
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default UserInfo;