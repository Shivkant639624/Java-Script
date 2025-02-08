// for of => it can iterate compelete array and string with declear anything
const num = [1,23,4,5,6,7,8]
for(const number of num)
{
    // console.log(number)
}


const greeting  = "Hello Shiv"
for(const greeet of greeting)
{
    // console.log(`Each char in greeeting ${greeet}`)
}

//Maps => unique and key, value pair , and same order as we enter
const map = new Map()
map.set("IN","India")
map.set("USA","United state of America")
map.set("Fr","France")
map.set("IN","India")
// console.log(map)

// provides keys value in a array
for (const key of map) {
    // console.log(key)    
}


// Keys and values of map using (for of)
for (const [key, value] of map) {
    // console.log(key," : " ,value)    
}

const myObject = {
    'game1': " NFS",
    'game2' : "Spiderman"
}

// Objects are not iterable, type error : Objects are not iterable
for (const element of myObject) {
    // console(element)    
}