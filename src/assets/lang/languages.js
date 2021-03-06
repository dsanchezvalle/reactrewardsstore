export const languages = {
    en:{
        title:'Electronics',
        morePointsMsg:'Get more points...',
        pointsSuccessTitle:'Enjoy your points!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `You got ${redeemedPoints} new points. Now you have ${newBalance} points.`
        },
        productsPerPageString: function(startItem, endItem, totalItems){
            return `${startItem} - ${endItem} of ${totalItems} products`
        },
        storeLabel: 'Store',
        historyLabel: 'Redeem History',
        sortLabel:'Sort by:',
        redeemLabel: 'Redeem Now',
        redeemedOnLabel: 'Redeemed on:',
        pointsNeededLabel: 'You need', 
        filterPriceOptions: [
            {
                value: 0, 
                text: 'Default $'
            },
            {
                value: 1,
                text: 'Lowest $ first'
            },
            {
                value: 2,
                text: 'Highest $ first'
            }
        ],
        redeemSuccessTitle: `It's yours!`,
        redeemSuccessMsg: function (itemName){
            return `You have redeemed ${itemName} sucessfully.`
        },
        errorTitle: 'Whoops!',
        errorGetPointsMsg:'We got an error requesting your points. Please, try again.',
        errorNotValidPointsMsg: 'You can not request that amount of points. Please, try again.',
        errorGetProductsMsg: 'Whoops! We got an error while bringing your products. Please, try again.',
        errorGetHistoryMsg: 'Whoops! We got an error requesting your redeem history. Please, try again.',
        errorRedeemProductMsg: 'We got an error while redeeming the product. Please, try again.',
        errorNotEnoughPointsMsg: 'Sorry, you do not have enough points to redeem this product. Try requesting more points.'
    },
    es:{
        title:'Electrónica',
        morePointsMsg:'Pide más puntos...',
        pointsSuccessTitle:'¡Disfruta tus puntos!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `Sumaste ${redeemedPoints} nuevos puntos. Ahora tienes ${newBalance} puntos.`
        },
        productsPerPageString: function (startItem, endItem, totalItems){
            return `${startItem} - ${endItem} de ${totalItems} productos`
        },
        storeLabel: 'Tienda',
        historyLabel: 'Historial de redimidos',
        sortLabel: 'Filtros:',
        redeemLabel: 'Redime ahora',
        redeemedOnLabel: 'Redimido el:',
        pointsNeededLabel: 'Necesitas',
        filterPriceOptions: [
            {
                value: 0, 
                text: '$ Automático'
            },
            {
                value: 1,
                text: 'Menor precio'
            },
            {
                value: 2,
                text: 'Mayor precio'
            }
        ],
        redeemSuccessTitle: `¡Lo tienes!`,
        redeemSuccessMsg: function (itemName){
            return `Has redimido ${itemName} exitosamente. Disfrútalo`
        },
        errorTitle: '¡Ups!',
        errorGetPointsMsg:'Tuvimos un error solicitando tus puntos. Por favor, intenta nuevamente.',
        errorNotValidPointsMsg: 'No puedes solicitar esa cantidad de puntos. Por favor, intenta nuevamente.',
        errorGetProductsMsg: '¡Ups! Tuvimos un error solicitando tus productos. Por favor, intenta nuevamente',
        errorGetHistoryMsg: '¡Ups! Tuvimos un error solicitando tu historial de redimidos. Por favor, intenta nuevamente.',
        errorRedeemProductMsg: 'Tuvimos un error redimiendo el producto. Por favor, intenta nuevamente.',
        errorNotEnoughPointsMsg: 'Lo sentimos, no tienes suficientes puntos para redimir este producto. Prueba solicitando más puntos.'
    }
}

export const langEsCategoryOptions = [{
    value: 0,
    text: "All categories",
    displayText: "Categorías"
}, {
    value: 1,
    text: "Phones",
    displayText: "Celulares"
}, {
    value: 2,
    text: "Gaming",
    displayText: "Juegos"
}, {
    value: 3,
    text: "Laptops",
    displayText: "Portátiles"
}, {
    value: 4,
    text: "Cameras",
    displayText: "Cámaras"
}, {
    value: 5,
    text: "Audio",
    displayText: "Audio"
}, {
    value: 6,
    text: "Monitors & TV",
    displayText: "Monitores & TV"
}, {
    value: 7,
    text: "Drones",
    displayText: "Drones"
}, {
    value: 8,
    text: "Phone Accessories",
    displayText: "Accesorios para tel."
}, {
    value: 9,
    text: "Smart Home",
    displayText: "Hogares inteligentes"
}, {
    value: 10,
    text: "PC Accessories",
    displayText: "Accesorios de PC"
}, {
    value: 11,
    text: "Tablets & E-readers",
    displayText: "Tablets y E-readers"
}, {
    value: 12,
    text: "PC Accesories",
    displayText: "Accesorios de PC"
}];