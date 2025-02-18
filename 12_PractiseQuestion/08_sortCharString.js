
// Write a JavaScript function that returns a passed string with letters in alphabetical order
function SortLetter(str){
    return str.split("").sort().join("")
}
console.log(SortLetter("harsh"))