function canPay(changeArray, totalDue) {

    if(!Array.isArray(changeArray)||changeArray.length===0)
    {
        return "Please Enter Valid Numbers In Array";
    }



    let totalSum = 0;
    
    for(let i=0; i<changeArray.length; i++){

        totalSum = totalSum+changeArray[i];

    }

    if(totalSum>=totalDue)
    {
        return true;
    }

    else{
        return false;
    }

}



// TestCases

let firstInput = canPay([1,2,5],10);
let secondInput = canPay([1,5,5],10);
let thirdInput = canPay([1,1,4],10);
let fourthInput = canPay(0,10);


console.log(firstInput);
console.log(secondInput);
console.log(thirdInput);
console.log(fourthInput);

