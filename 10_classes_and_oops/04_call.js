function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    // setUsername(username) // calling but not setting the username
    setUsername.call(this,username) // now it will take cretUser username

    this.email = email
    this.password = password
    
}

const obj1  = new createUser("Shiv","shivkant@gmail.com", 12345)
console.log(obj1)

// it gives current execution context passes to another function