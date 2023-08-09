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

// TestCase 

let testCases = [[2, 3],[4, 2],[4,4],[1,2],[4,-2],[0.,1]];

for(const test of testCases)
{
    console.log(sortMaker(test));
}