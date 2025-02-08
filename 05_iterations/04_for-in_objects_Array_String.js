// (for in loop) always print keys if we use it as (for of loop)
// for (const key in object) {
//     // const element = object[key];   
    
// }


// it can be iterate using (for in loop)

const myObj = {
    js : 'javacript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple',
}

// print key using (for in loop)
for (const key in myObj)
{
    // console.log(key)
}

// print value using (for in loop)
for (const values in myObj)
{
    // console.log(myObj[values])
}

// print key and value using (for in loop)
for (const key in myObj)
{   
    // console.log(`${key} shortcut is for : ${myObj[key]}`)
}


// Array acces using (for in loop)

// keys will be printed --
const programming = ["js","cpp","rb","swift"]

for(const keys in programming )
{
    // console.log(keys)
}

// value will be printed --

for(const keys in programming )
{
    // console.log(programming[keys])
}

const map = new Map()
map.set("IN","India")
map.set("USA","United state of America")
map.set("Fr","France")
map.set("IN","India")

// Map can not be iterate like this
for(const keys in map )
{
    console.log(keys)
}