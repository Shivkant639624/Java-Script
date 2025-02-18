

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve(); // To connect with then()
    },1000);

})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task-2 complete")
        resolve();
    },1000)
}).then(function(){
    console.log("Async task 2 completed")
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Shivkant", email:"shiv@gmail.com"}); // To connect with then()
    },1000);

})
promiseTwo.then(function(user){
    console.log(user);
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() =>{
        let error =true;
        if(!error)
        {
            resolve({username:"Shivkant", email:"shiv@gmail.com"});
        }
        else
        {
            reject("ERROR: somthing went wrong")
        }
    },1000)
})
promiseThree
.then((user) =>{
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error)

}).finally(() =>{
    console.log("Promise is either resolved or rejected")
})


const promisefive  = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        let error = true;
        if(!error)
        {
            resolve({username:"Shivkant", email:"shiv@gmail.com"});
        }
        else
        {
            reject("ERROR: somthing went wrong")
        }
    },1000)    
})

async function consumePromiseFive(){
    try {
        const response = await promisefive
        console.log(response);
    } catch (error) {
        console.log("Gracefully eroor handle")
    }
    
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json() //use await because it will take time to load
//         console.log(data)
        
//     } catch (error) {
//         console.log("E: ",error);        
//     }
    
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((eroor) => { 
    console.log(eroor);
}).finally(() => {
    console.log("fetech completed")
})