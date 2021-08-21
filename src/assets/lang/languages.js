export const languages = {
    en:{
        title:'Electronics',
        morePointsMsg:'Get more points...',
        pointsSuccessTitle:'Enjoy your points!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `You have redeemed ${redeemedPoints} points successfully. Now you have ${newBalance} points.`
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
        ]
    },
    es:{
        title:'Electrónica',
        morePointsMsg:'Pide más puntos...',
        pointsSuccessTitle:'¡Disfruta tus puntos!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `Has redimido ${redeemedPoints} puntos exitosamente. Ahora tienes ${newBalance} puntos.`
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
        ]       
    }
}