// loop an array of objects and remove all objects which don't have gender's value male
// function removeObjElseMale(arr){
//     return arr.filter(obj => obj.gender == 'male');
// }
function removeObjElseMale(arr){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i].gender != 'male'){
            arr.splice(i,1);
        }
    }    
    
    return arr
}

let arr = [
    {name: "shivkant", gender :"male"},
    {name: "Shivam", gender :"male"},
    {name: "Meera", gender :"female"},
    {name: "Rimjhim", gender :"female"},
    {name: "Abcd", gender :"Non - Specidied"},
    {name: "Sanjana", gender :"female"},
    {name: "Ritik", gender :"male"},
]
console.log(removeObjElseMale(arr))