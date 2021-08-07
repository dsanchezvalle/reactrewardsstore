//Dependencies
import React, { useContext, useEffect, useState } from 'react'
//Context
import { AppContext } from '../../../../contexts/AppContext';
//Styles 
import './Filters.css'
//Test data
import { products } from '../../../../utils/data';

const Filters = () => {
    const {setFilteredProducts} = useContext(AppContext);
    const [productList, setProductList] = useState([]);
    
    //1. Fetch productList from API and set it.
    useEffect(()=>{
        setProductList(products);
    //2. Apply filters to productList to produce filteredList
        const newFilteredProducts = productList; //This will be filtered
    //3. Set filteredList (context)
        setFilteredProducts(newFilteredProducts);
    }    
    ,[productList]);    

    return(
        <>
        <article className="FiltersContainer">
            <p className="FilterLabel">Sort by:</p>
            <select className="FilterPrice" name="filter1" id="filter1" /* value={0} */>
                <option value={0}>Price</option>
                <option value={1}>Lowest $</option>
                <option value={2}>Highest $</option>
            </select>
            <select className="FilterCategory" name="FilterCategory" id="filter2" /* value={0} */>
                <option value={0}>Category</option>
                <option value={1}>Category 1</option>
                <option value={2}>Category 2</option>
            </select>
        </article>
        </>
    );
}

export default Filters;