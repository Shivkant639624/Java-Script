const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)


const chai =
{
    name : "ginger chai",
    price : 250,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai nahi bani")
    }


}
// console.log(chai)

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, 'name',{
    // writable : false,
    // enumerable : false,
    enumerable : true,
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// To iterate Object
// for(let [key,value] of Object.entries(chai))
// {
//     console.log(`${key} : ${value}`)
// }

// To iterate Object which object key doesnt contain function
for(let [key,value] of Object.entries(chai))
{
    if(typeof value != 'function')
    {
        console.log(`${key} : ${value}`)
    }
}
