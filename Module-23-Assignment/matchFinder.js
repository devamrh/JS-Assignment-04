function matchFinder(string1, string2) {

    if(typeof(string1)==='string' && typeof(string2)==='string')
    {
       return string1.includes(string2);
    }

    else{

        return "Please Enter Valid String!"
    }

}


let testCase_01 = matchFinder("John Doe", "ohn");
console.log(testCase_01);


let testCase_02 = matchFinder("JavaScript", "Code");
console.log(testCase_02);

let testCase_03 = matchFinder("Peter Parker", "Pen");
console.log(testCase_03);

let testCase_04 = matchFinder("Peter Parker","pet");
console.log(testCase_04);

let testCase_05 = matchFinder("Peter Parker",0);
console.log(testCase_05);