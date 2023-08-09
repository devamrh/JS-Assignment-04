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



let testCase_01 = cubeNumber(3);
console.log(testCase_01);