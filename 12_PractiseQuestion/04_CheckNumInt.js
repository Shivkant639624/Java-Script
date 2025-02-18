let num = 2
function checkInt(num){
    // return Number.isInteger(num)
    if(num%1 === 0)
    {
        return true
    }
    else
    {
        return false
    }
}
console.log(checkInt(num))