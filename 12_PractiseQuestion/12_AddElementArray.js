// loop an array and add all members of it
function sumOFElement(arr){
    sum = 0;
    // for(let i=0; i++; i++){
    arr.forEach((ele) => {
        sum +=ele
    })
    return sum    
}
arr = [1,2,3,4,5]
console.log(sumOFElement(arr))