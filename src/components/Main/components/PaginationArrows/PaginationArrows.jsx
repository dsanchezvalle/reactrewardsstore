//Dependencies
import React from 'react';
//Styles
import './PaginationArrows.css'
//Images and Icons
import { ReactComponent as ArrowLeft } from "../../../../assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/images/arrow-right.svg";

const PaginationArrows = () => {
    return(
        <>
        <p className="PaginationArrowsContainer">
            <ArrowLeft />
            <ArrowRight />
        </p>
        </>
    );
}

export default PaginationArrows;