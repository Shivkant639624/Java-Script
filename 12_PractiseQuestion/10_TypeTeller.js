// -Write a JavaScript function which accepts an argument and returns the type
//  Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function typeTeller(value){
    return typeof value ;
}
console.log(typeTeller({name :"shiv"}))
console.log(typeTeller(12.4))
// console.log(typeTeller(16))
console.log(typeTeller(true))
console.log(typeTeller(function (){}))
console.log(typeTeller("hello"))
console.log(typeTeller(undefined))