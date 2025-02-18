// function cloanArray(arr){
//     return [...arr]
// }
// let newArr = cloanArray([1,2,3,4,5])
// console.log(newArr)

// function cloanArray(arr){
//     let newArr = []
//     arr.forEach((element) =>{
//         newArr.push(element)
//     })
//     return newArr
// }

function cloanArray(arr){
    let newArr = arr.map(function(e){
        return e;
    })
    return newArr
}

let arr = [1,2,3,4,5]
console.log(arr)
