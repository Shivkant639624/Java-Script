const myNum = [1,2,3]

// Reduce() function => using simple function
// const myTotal = myNum.reduce( function (acc, curr_val){
//     console.log(`acc:${acc} and curr_val : ${curr_val}`)
//     return acc+curr_val
// },0)
// console.log(myTotal)

// Reduce() function => using arrow function
// const myTotal = myNum.reduce((acc,curr_val) => acc+curr_val,0)
// console.log(myTotal)


const  shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 9999
    },
    {
        itemName : "Mobile development course",
        price : 5999
    },
    {
        itemName : "Data Science course",
        price : 12999
    },
]

const grandTotal = shoppingCart.reduce((acc, item) => acc+item.price,0)
console.log(grandTotal)