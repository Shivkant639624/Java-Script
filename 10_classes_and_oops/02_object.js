function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 2
 console.log(multiplyBy5(5))
 console.log(multiplyBy5.power)
 console.log(multiplyBy5.prototype)

function createUser(username, price)
{
    this.username = username
    this.price = price

}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`)
}

const shiv = new createUser("Shivkant",20)
const umesh = new createUser("umesh",10)

shiv.printMe()