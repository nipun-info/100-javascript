
function calculateMoney(ticketSale){
    // return error message if the parameter are not number and negative number 
    if(typeof ticketSale !== 'number' || ticketSale < 0){
        return "Please provide invalid Number.";
    }

    const ticketPrice = 120;
    const guardCost = 500;
    const perStuffCost = 50;

    const totalIncome = ticketPrice * ticketSale;
    const totalCost = guardCost + (perStuffCost * 8);

    const result = totalIncome - totalCost;
    return result;
}


function checkName(name){
    // return error message if the parameter are not strings
    if(typeof name !== 'string'){
        return 'invalid'
    }else{
        let lastLetter = "a,y,i,e,o,u,w";
        let checkLastLetter = name[name.length - 1];
      
        // return input name is good name or bad name
        if(lastLetter.toUpperCase().includes(checkLastLetter) || lastLetter.toLowerCase().includes(checkLastLetter)){
            return "Good Name";
        }else {
            return "Bad Name";
        }
    }
}


function deleteInvalids(elements){
    // return error message if the parameter are not array
    if(!Array.isArray(elements)){
        return "Please provide Invalid Array."
    }else{
        let validArray = [];
        for(let element of elements){
            if(typeof element === 'number' &&  Number.isInteger(element)){
                validArray.push(element);
            }
        }
        return validArray;
    }
}


function password(obj){
    // return error message if the parameter are not object
    if(typeof obj !== 'object'){
        return 'Invalid';
    }
    else if(!obj.name || !obj.birthYear || !obj.siteName){
        return 'Invalid';
    }
    else if (Object.values(obj)[1].toString().length !== 4 ){
        return 'Invalid';
    }
    else {
        const objName = obj.name;
        const objYear = obj.birthYear;
        const objSite = obj.siteName;

        const firstLetter = objSite.charAt(0).toUpperCase();
        const remainingLetter = objSite.slice(1);

        const objSiteFull = firstLetter + remainingLetter;    
        return `${objSiteFull}#${objName}@${objYear}`;
    }
}



function monthlySavings(clientPayments, livingCost) {
    if (!Array.isArray(clientPayments) || typeof livingCost !== 'number') {
        return "invalid input";
    } else {       
        let paymentWithTax = 0;
        let paymentWithoutTax = [];

        for (let i = 0; i < clientPayments.length; i++) {
            const payment = clientPayments[i];
  
            if (payment >= 3000) {
                paymentWithTax = payment * 0.8;
            }else {
                paymentWithoutTax.push(payment);
            }           
        }

        let withoutTaxIncome = 0;
        for(let payment of paymentWithoutTax){
            withoutTaxIncome = withoutTaxIncome + payment;
        }
        const total = paymentWithTax + withoutTaxIncome;

        if (total >= livingCost) {
            const savings = total - livingCost;
            return `Total Savings: ${savings}`;
        } else {
            return "earn more";
        }
    }
}


