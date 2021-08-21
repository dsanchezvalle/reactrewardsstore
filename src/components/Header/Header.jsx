//Dependencies
import React, { useContext, useEffect } from "react";
//Styles
import './Header.css'
//Constants and Icons
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as USFlag } from "../../assets/images/us.svg";
import { ReactComponent as COFlag } from "../../assets/images/co.svg";
//Components
import UserInfo from "./UserInfo/UserInfo";
//Hooks
import useFetchUserInfo from "../../hooks/useFecthUserInfo";
//Context
import { AppContext } from "../../contexts/AppContext";
//Languages
import { languages } from "../../assets/lang/languages";

const Header = () => {
    //Context
    const {currentLanguage, setCurrentLanguage, languageCollection, setLanguageCollection} = useContext(AppContext);
    //Custom Hook to fetch userInfo
    useFetchUserInfo();

    //Handle language selection
    function handleLanguageChange(){
        currentLanguage === 'en' ? setCurrentLanguage('es'):setCurrentLanguage('en');
    }

    //Set App Language Collection
    useEffect(()=>{
        setLanguageCollection(languages[currentLanguage]);
    },[currentLanguage, languageCollection, setLanguageCollection])

    //Language Collection destructuring
    const { title } = languageCollection;

    return(
        <>
        <header className="Header">
            <div className="Header__LogoAndLangWrapper">
                <Logo />
                <button className="Header__LanguageWrapper" onClick={handleLanguageChange}>
                    <span className="Header__LanguageLabel">{currentLanguage === 'en'?'ESP':'ENG'}</span>
                    {currentLanguage === 'en'?(
                    <COFlag className="Header__LanguageFlag"/>
                    ):(
                    <USFlag className="Header__LanguageFlag"/>
                    )}
                </button>
            </div>
            <UserInfo />
        </header>
        <section className="Header__BannerImage Banner-Mask">
            <p className="Header__BannerText">{title}</p>
        </section>
        </>
    );
}

export default Header;