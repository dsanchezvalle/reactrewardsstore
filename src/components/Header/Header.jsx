//Dependencies
import React from "react";
import { useContext } from "react";
//Styles
import './Header.css'
//Constants and Icons
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
//Context
import { AppContext } from "../../contexts/AppContext";

const Header = () => {
    const {test} = useContext(AppContext);
    return(
        <>
        <header className="Header">
            <Logo />
            <div>UserInfo {test}</div>
        </header>
        <section className="Header__BannerImage Banner-Mask">
            <p className="Header__BannerText">Electronics</p>
        </section>
        </>
    );
}

export default Header;