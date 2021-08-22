//Dependencies
import React, { useContext, useEffect, useState } from 'react'
//Context
import { AppContext } from '../../../../contexts/AppContext';
//Styles 
import './Filters.css'
//Constants
import { initialFilters } from '../../../../utils/constants';
import { langEsCategoryOptions } from '../../../../assets/lang/languages';

const Filters = () => {
    //States and Context
    const {setFilteredProducts, setErrorMessage, setProductsCurrentPage, setIsLoading, languageCollection, currentLanguage } = useContext(AppContext);
    const [productList, setProductList] = useState([]);
    const [filterList, setFilterList] = useState(initialFilters);
    const [filterCategoryOptions, setFilterCategoryOptions] = useState([]);

    //Language Collection destructuring
    const { sortLabel, filterPriceOptions, errorGetProductsMsg } = languageCollection;
    
    //1. Fetch productList from API and set it.
    useEffect(()=>{
        if (productList.length === 0){
            async function getProducts(){
                try{ 
                    setIsLoading(true);               
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
                    setIsLoading(false);
                    setProductList(itemList); 
                }
                catch (err){
                    setErrorMessage(errorGetProductsMsg);
                    setIsLoading(false);
                }
            }
            getProducts();
        }
        else{
            let categoryList = getCategoryOptions();     
            setFilterCategoryOptions(categoryList);
        }

        //Get categories from the fetched productList and creates an object out of it
        function getCategoryOptions(){
            //Get categories from fetched productList
            let categoryArray = productList.map((product) => product.category);
            //Get unique ocurrences of the categoryArray
            let uniqueCategories = categoryArray.filter((value, index, self) => self.indexOf(value) === index);
            //Create object with category options to populate CategoryFilter
            let categoryOptions = uniqueCategories.map((category, index)=>{
                return {
                    value: index+1,
                    text: category
                }
            });
            
            /* Define Category options 
            1. If currentLanguage is English it returns original options from API
            2. If not (then it is Spanish) it imports langEsCategoryOptions from languages.js
            Note: There was a typo in the API (PC Accessories/PC Accesories) so in order 
            not to omit those items, they were duplicated in the Spanish version as well
            */

            let finalCategoryOptions;
            if(currentLanguage === 'en'){
                finalCategoryOptions = [{value: 0, text: 'All Categories'}, ...categoryOptions];
            }
            else{
                finalCategoryOptions = langEsCategoryOptions;
            }
            
            return finalCategoryOptions;
        }

        //2. Apply filters to productList to produce filteredList
        const initialProductList = [...productList];    
        let newFilteredProducts = filterProducts(initialProductList, filterList, getCategoryOptions);
    
        //3. Set filteredList
        setFilteredProducts(newFilteredProducts);        
    }    
    ,[productList, setErrorMessage, setFilteredProducts, setFilterCategoryOptions, setIsLoading, filterList, currentLanguage, errorGetProductsMsg]);
    
    //Filter products according to filters
    function filterProducts (products, filters, getCategoryOptions){
        let filteredProductList = [];
        let filteredProductList2 = [];
        let categories = getCategoryOptions();

        //SORTING products by price
        if(filters?.[0].value === 0){
            filteredProductList = products;
        }
        else{
            //Sort products from lowest to highest price (usually, most common user choice)
            let sortedProducts = products.sort((a, b) => a.cost-b.cost);
            //Verify selection 1:lowest to highest 2:highest to lowest
            filteredProductList = filters?.[0].value === 1 ? (sortedProducts):(sortedProducts.reverse()); 
        }
        
        //FILTERING products by category
        let selectedCategory = categories?.[filters?.[1].value].text;
        
        if(filters?.[1].value === 0){
            filteredProductList2 = filteredProductList;
        }
        else{
            filteredProductList2 = filteredProductList?.filter((product)=> product.category === selectedCategory);
        } 

        return filteredProductList2;   
        
    }

    //Handle the change on each filter
    function handleFilter(e){
        let newFilterList = filterList?.map(filter => {
            return filter.filterId === e.target.id ?
            {
                filterId: e.target.id, 
                value: parseInt(e.target.value)
            }
            :
            filter; 
        } );
        setFilterList(newFilterList);
        setProductsCurrentPage(1); 
    }
    
    //Set the key regarding the text to use in filterCategory according to current language
    let categoryTextKey = currentLanguage === 'en' ? 'text' : 'displayText';

    return(
        <>
        <article className="FiltersContainer">
            <p className="FilterLabel">{sortLabel}</p>
            <select className="FilterPrice" name="FilterPrice" id="FilterPrice" value={filterList?.[0].value} onChange={handleFilter} >
                {filterPriceOptions?.map((filterItem) => <option key={`k-${filterItem.text}`} value={filterItem.value}>{filterItem.text}</option>)}                
            </select>
            <select className="FilterCategory" name="FilterCategory" id="FilterCategory" onChange={handleFilter}>
                {filterCategoryOptions?.map((filterItem) => <option key={`k-${filterItem.value}`} value={filterItem.value}>{filterItem[categoryTextKey]}</option>)}                
            </select>
        </article>
        </>
    );
}

export default Filters;