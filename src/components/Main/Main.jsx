//Dependencies
import React from "react";
import { useContext } from "react";
//Components
import TopBar from "./TopBar/TopBar";
import Results from "./Results/Results";
import Footer from "./Footer/Footer";
//Styles
import './Main.css'
//Context
import { AppContext } from "../../contexts/AppContext";

const Main = () => {
    return(
        <>
        <main className="Main">
            <TopBar />
            <Results />
            <Footer />
        </main>
        </>
    );
}

export default Main;