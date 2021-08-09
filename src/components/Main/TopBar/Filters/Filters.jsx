//Dependencies
import React, { useContext, useEffect, useState } from 'react'
//Context
import { AppContext } from '../../../../contexts/AppContext';
//Styles 
import './Filters.css'

const Filters = () => {
    const {setFilteredProducts, setErrorMessage} = useContext(AppContext);
    const [productList, setProductList] = useState([]);
    
    //1. Fetch productList from API and set it.
    useEffect(()=>{
        if (productList.length===0){
        async function getProducts(){
            try{                
                const fetchedData = 
                await fetch("https://coding-challenge-api.aerolab.co/products", 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk'
                    },
                    method: 'GET'
                  });
                  const itemList = await fetchedData.json();
                  setProductList(itemList); 
            }
            catch (err){
                setErrorMessage('Whoops! We got an error while bringing your products. Please, try again.');
            }
        }
        getProducts();
    }
        //setProductList(products);
    //2. Apply filters to productList to produce filteredList
        const newFilteredProducts = productList; //This will be filtered
    //3. Set filteredList (context)
        setFilteredProducts(newFilteredProducts);
    }    
    ,[productList, setErrorMessage, setFilteredProducts]);    

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