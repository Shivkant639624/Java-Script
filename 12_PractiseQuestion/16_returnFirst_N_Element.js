// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function returnN_first_Element(arr, n=1){
    return arr.slice(0,n)
}

console.log(returnN_first_Element([1,2,3,4,5,676],2))
console.log(returnN_first_Element([1,2,3,4,5,676]))
console.log(returnN_first_Element([1,2,3,4,5,676],4))