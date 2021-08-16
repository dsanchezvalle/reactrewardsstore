//Dependencies
import React, { useContext, useEffect, useState } from 'react'
//Context
import { AppContext } from '../../../../contexts/AppContext';
//Styles 
import './Filters.css'
import { initialFilters, filterPriceOptions } from '../../../../utils/constants';

const Filters = () => {
    const {setFilteredProducts, setErrorMessage} = useContext(AppContext);
    const [productList, setProductList] = useState([]);
    const [filterList, setFilterList] = useState(initialFilters);
    const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);
    
    //1. Fetch productList from API and set it.
    useEffect(()=>{
        if (productList.length === 0){
        async function getProducts(){
            try{                
                const fetchedData = 
                await fetch("https://coding-challenge-api.aerolab.co/products", 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExNDkwNGQ5ZmMzODAwMjFmNjM4NDMiLCJpYXQiOjE2Mjg1MjI3NTZ9.9RRbOr2MKD1bfRKrqBzfeTf6NqH153GOgb0Wu0pDNQk'
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
    else{
        function getCategoryOptions(){
            //Get categories from fetched productList
            let categoryArray = productList.map((product) => product.category);
            let uniqueCategories = categoryArray.filter((value, index, self) => self.indexOf(value) === index);
            //Create object with category options
            let categoryOptions = uniqueCategories.map((category, index)=>{
                return {
                    value: index+1,
                    text: category
                }
            });
            return [{value: 0, text: 'All Categories'}, ...categoryOptions];
        }
        setFilterCategoryOptions(getCategoryOptions());
    }
        //setProductList(products);
    //2. Apply filters to productList to produce filteredList
        
        const newFilteredProducts = productList; //This will be filtered
    //3. Set filteredList (context)
        setFilteredProducts(newFilteredProducts);
    }    
    ,[productList, setErrorMessage, setFilteredProducts, setFilterCategoryOptions]);
    
    //It handles the change on filters
    function handleFilter(e){
        let newFilterList = filterList.map(filter => {
            return filter.filterId === e.target.id ?
            {
                filterId: e.target.id, 
                value: e.target.value
            }
            :
            filter; 
        } );
        setFilterList(newFilterList);
    }

    return(
        <>
        <article className="FiltersContainer">
            <p className="FilterLabel">Sort by:</p>
            <select className="FilterPrice" name="FilterPrice" id="FilterPrice" value={filterList[0].value} onChange={handleFilter} >
                {filterPriceOptions.map((filterItem) => <option value={filterItem.value}>{filterItem.text}</option>)}                
            </select>
            <select className="FilterCategory" name="FilterCategory" id="FilterCategory" onChange={handleFilter}>
            {filterCategoryOptions.map((filterItem) => <option value={filterItem.value}>{filterItem.text}</option>)}                
            </select>
        </article>
        </>
    );
}

export default Filters;