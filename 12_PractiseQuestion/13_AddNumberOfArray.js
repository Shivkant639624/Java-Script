// in an array of numbers and strings, only add those members which are not strings
function AddOnlyNumArray(arr){
    let sum = 0
    arr.forEach((element) =>{
        if(typeof element != "string"){
            sum +=element
        }

    })
    return sum

}
arr = [1,2,'dg','23',"23",4,"shiv"]
console.log(AddOnlyNumArray(arr))