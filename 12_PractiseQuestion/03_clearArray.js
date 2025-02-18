
// 3 -How to empty an array in JavaScript ? do not reset it to a new array,
// 4 -How would you check if a number is an integer?
// 5 Make this work :
arr = [1,2,3,4,6]
function clearArray(arr){
    while(arr.length > 0)
    {
        arr.pop();
    }
}
clearArray(arr)
console.log(arr)
// arr = []
// console.log(arr)