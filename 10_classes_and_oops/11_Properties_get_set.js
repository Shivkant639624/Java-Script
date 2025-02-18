function User(email, password) {
    let _email = email;      // Private variable
    let _password = password; // Private variable

    Object.defineProperty(this, 'email', {
        get: function () {
            return _email ? _email.toUpperCase() : undefined;
        },
        set: function (value) {
            _email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return _password ? _password.toUpperCase() : undefined;
        },
        set: function (value) {
            _password = value;
        }
    });
}

const chai = new User("c@gmail.com", "chai");
console.log(chai.email);    // Output: C@GMAIL.COM
console.log(chai.password); // Output: CHAI
