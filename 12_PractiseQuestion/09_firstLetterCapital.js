// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function firstLetterCapital(str){
    let res = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase()+word.substring(1)
    })
    return res.join(" ")

}

str = "ki haal chaal shivkant"
console.log(firstLetterCapital(str))