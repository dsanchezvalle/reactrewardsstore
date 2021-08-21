export const languages = {
    en:{
        title:'Electronics',
        morePointsMsg:'Get more points...',
        pointsSuccessTitle:'Enjoy your points!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `You have redeemed ${redeemedPoints} points successfully. Now you have ${newBalance} points.`
        }
    },
    es:{
        title:'Electrónica',
        morePointsMsg:'Pide más puntos...',
        pointsSuccessTitle:'¡Disfruta tus puntos!',
        pointsSuccessMsg: function (redeemedPoints, newBalance){
            return `Has redimido ${redeemedPoints} puntos exitosamente. Ahora tienes ${newBalance} puntos.`
        }        
    }
}