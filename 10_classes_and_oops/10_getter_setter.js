class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        //  but returning this while user want to access
        return `${this._password}shiv`
    }
    set password(value){
        // stroing this in the databse
        this._password = value
    }
}
const shiv = new User("s@gmail.com", "abc");
console.log(shiv.password);
console.log(shiv.email);