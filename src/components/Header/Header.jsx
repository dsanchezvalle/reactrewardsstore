//Dependencies
import React from "react";
//Styles
import './Header.css'
//Constants and Icons
import { ReactComponent as Logo } from "../../assets/images/logo.svg";


const Header = () => {
    
    return(
        <>
        <header className="Header">
            <Logo />
            <div>UserInfo</div>
        </header>
        </>
    );
}

export default Header;