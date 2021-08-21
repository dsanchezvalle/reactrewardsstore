export const languages = {
    en:{
        title:'Electronics',
        morePointsMsg:'Get more points...',
        pointsSuccessTitle:'Enjoy your points!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `You have redeemed ${redeemedPoints} points successfully. Now you have ${newBalance} points.`
        },
        productsPerPageString: function(startItem, endItem, totalItems){
            return `${startItem} - ${endItem} of ${totalItems} products`
        },
        storeLabel: 'Store',
        historyLabel: 'Redeem History',
        sortLabel:'Sort by:',
        redeemLabel: 'Redeem Now',
        redeemedOnLabel: 'Redeemed on:',
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
        }
    },
    es:{
        title:'Electrónica',
        morePointsMsg:'Pide más puntos...',
        pointsSuccessTitle:'¡Disfruta tus puntos!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `Has redimido ${redeemedPoints} puntos exitosamente. Ahora tienes ${newBalance} puntos.`
        },
        productsPerPageString: function (startItem, endItem, totalItems){
            return `${startItem} - ${endItem} de ${totalItems} productos`
        },
        storeLabel: 'Tienda',
        historyLabel: 'Historial de redimidos',
        sortLabel: 'Filtros:',
        redeemLabel: 'Redime ahora',
        redeemedOnLabel: 'Redimido el:',
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
        }       
    }
}