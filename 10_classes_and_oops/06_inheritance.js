class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }

}

const objOFteacher= new teacher("shiv","shiv@gmail.com","123")
objOFteacher.addCourse()
objOFteacher.logMe()

const objOFUser = new User("Umesh")
objOFUser.logMe()
// objOFUser.addCourse() // not accesible


