

function cubeNumber(number) {

    if(typeof(number) === 'number')
    {
        let x = Math.pow(number,3);
        return x;
    }
    else{
        return "Please Enter A Valid Number"
    }

}


function matchFinder(string1, string2) {

    if(typeof(string1)==='string' && typeof(string2)==='string')
    {
       return string1.includes(string2);
    }

    else{

        return "Please Enter Valid String!"
    }

}


function sortMaker(arr) {

    const [a,b] = arr;


    if(!Array.isArray(arr) || arr.length>2 || typeof(a)!=='number' || typeof(b)!=='number' || a<0 || b<0) 
    {
        return "Invalid Input";
    }

    else if(a===b)
    {
        return "equal";
    }

    else{
        return [Math.max(a,b),Math.min(a,b)];
    }


}



function findAddress(obj) {

    let street = obj.street !== undefined ? obj.street : '__';
    let house = obj.house !== undefined ? obj.house : '__';
    let society = obj.society !== undefined ? obj.society : '__';
    
    
    return street+","+house+","+society;

}



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
