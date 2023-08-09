function findAddress(obj) {

    let street = obj.street !== undefined ? obj.street : '__';
    let house = obj.house !== undefined ? obj.house : '__';
    let society = obj.society !== undefined ? obj.society : '__';
    
    
    return street+","+house+","+society;

}


// Test cases
const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
const input2 = { street: 10, society: "Earth Perfect" };
const input3 = { street: 10 };

const output1 = findAddress(input1);
const output2 = findAddress(input2);
const output3 = findAddress(input3);


console.log(output1); 
console.log(output2); 
console.log(output3); 
