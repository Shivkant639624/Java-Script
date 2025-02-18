const user = {
    username : "Shivkant",
    loginCount : 8,
    signedIn : true,

    getUserDeatail : function(){
        console.log("Got user details from database");
        console.log(`Username : ${this.username}`);
        // console.log(this);

    }
}
// console.log(user.username)
// console.log(user.getUserDeatail())
// console.log(this);


//  'new' is a constructor 
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    
    return this
}

// const userOne  = User("Shivkant","5",true)
// const userTwo = User("Umesh","16",false) // userTwo will override to userOne so use new keyword
// console.log(userOne)

const userOne  = new User("Shivkant","5",true)
const userTwo = new User("Umesh","16",false) // userTwo will override to userOne so use new keyword
// console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)
