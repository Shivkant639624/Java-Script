// Write a JavaScript program to find the most frequent item of an array

function mostFrequent(arr){
    let FreObj = {};
    arr.forEach(function(element){
        if(!FreObj.hasOwnProperty(element))
        {
            FreObj[element] = 1;
        }
        else{
            FreObj[element]++;
        }
              
    });
    let res = Object.keys(FreObj).reduce(function(acc, next){
        return FreObj[acc] > FreObj[next] ? acc: next;
    });
    return res  
}
console.log(mostFrequent([1,2,3,4,44,5,5,5,67,3,4,23]))  