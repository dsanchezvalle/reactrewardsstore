//Dependencies
import React from 'react'
//Styles 
import './Filters.css'

const Filters = () => {
    return(
        <>
        <article className="FiltersContainer">
            <p className="FilterLabel">Sort by:</p>
            <select className="FilterPrice" name="filter1" id="filter1" /* value={0} */>
                <option value={0}>Price</option>
                <option value={1}>Lowest Price</option>
                <option value={2}>Highest Price</option>
            </select>
            <select name="FilterCategory" id="filter2" /* value={0} */>
                <option value={0}>Category</option>
                <option value={1}>Category 1</option>
                <option value={2}>Category 2</option>
            </select>
        </article>
        </>
    );
}

export default Filters;