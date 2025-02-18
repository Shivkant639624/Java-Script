class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const obj  = new User("Shivkant","shivkant639624@gmail.com", "10025")
console.log(obj.encryptPassword());
console.log(obj.changeUsername());


// behind the scene

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password

// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const obj = new User("Shivkant","shivkant639624@gmail.com", "10025")
// console.log(obj.encryptPassword())
// console.log(obj.changeUsername())