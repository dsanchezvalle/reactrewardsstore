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
        <section className="Header__BannerImage Banner-Mask">
            <p className="Header__BannerText">Electronics</p>
        </section>
        </>
    );
}

export default Header;