const gameName = "Shiv Kant"
// console.log(`my name is ${gameName}`)

// works as a object , every key is stored in digits as key value pair
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)


//  **** Lowercase and uppercase *****

// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(6))
// console.log(gameName.indexOf('t'))

//  **** Slicing *****

// Substring does **not allowed** negative number
const str1 = "Goodmorning Shivam"
const str2 = str1.substring(0,5)
// console.log(str2)

// slicing does **allowed** negative number
const str3 = str1.slice(-8,3)
// console.log(str3)

//  **** trim() *****

const newStr = "    Shiv    "
// console.log(newStr)
// console.log(newStr.trim())

//  **** replace() *****

const url = "https:shiv.com/shivkant%20Pal"
// console.log(url.replace("%20", "-"))

//  **** (Split)- and convert it into array *****

const Gname = "My-name-is-shiv-kant"
console.log(Gname.split("-"))







