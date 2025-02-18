class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createID(){ //only accesible by its class 
        return '123'
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const shiv = new User("Shiv")
// shiv.logMe()
// console.log(shiv.createID())

const Teacher1 = new Teacher("Umesh","u@gmail.com")
console.log(Teacher1.createID())



