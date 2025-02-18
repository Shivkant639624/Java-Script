// How to check if an object is an array or not
arr = [1,23,4,5,6]
obj = {
    name : "Shiv",
    graduate :true
}

function checkArray(element){
   return Array.isArray(element)
}
console.log(checkArray(arr))
console.log(checkArray(obj))