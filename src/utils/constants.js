export const URLS = {
    publicPath: process.env.PUBLIC_URL
};

export const getPointsOptions = [1000, 5000, 7500]; 

/* Filters initial state 
FilterPrice 0: has default sorting from API
FilterCategory 0: includes all categories
*/
export const initialFilters = [
    {
        filterId: 'FilterPrice',
        value: 0
    },
    {
        filterId: 'FilterCategory',
        value: 0
    }
];

//Set filter price options
export const filterPriceOptions = [
    {
        value: 0, 
        text: 'Default'
    },
    {
        value: 1,
        text: 'Lowest $ first'
    },
    {
        value: 2,
        text: 'Highest $ first'
    }
];


