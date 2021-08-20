//Dependencies
import React from "react";
//Styles
import './Header.css'
//Constants and Icons
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
//Components
import UserInfo from "./UserInfo/UserInfo";
//Hooks
import useFetchUserInfo from "../../hooks/useFecthUserInfo";

const Header = () => {
    //Custom Hook to fetch userInfo
    useFetchUserInfo();

    return(
        <>
        <header className="Header">
            <Logo />
            <UserInfo />
        </header>
        <section className="Header__BannerImage Banner-Mask">
            <p className="Header__BannerText">Electronics</p>
        </section>
        </>
    );
}

export default Header;