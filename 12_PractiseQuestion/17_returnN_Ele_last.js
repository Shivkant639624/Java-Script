// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.function returnN_first_Element(arr, n=1){
function returnN_first_Element(arr, n=1){
    return arr.slice(-n)
}

console.log(returnN_first_Element([1,2,3,4,5,676],5))
console.log(returnN_first_Element([1,2,3,4,5,676]))
console.log(returnN_first_Element([1,2,3,4,5,676],4))