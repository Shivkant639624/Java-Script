// Write a JavaScript program to shuffle an array

function suffleArray(arr){
    let n = arr.length-1;
    let index =  Math.floor(Math.random()*n ) 
    while(n>0){
        n--;
        let temp = arr[n]  ;
        arr[n] = arr[index];
        arr[index] = temp;
    }
    return arr;
   

}
console.log(suffleArray([1,2,33,44,5,6,7]))