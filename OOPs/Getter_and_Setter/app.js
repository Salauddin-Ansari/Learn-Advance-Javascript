// Getter and Setter Using Class based and This is the main syntax

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
    return `${this._email}@gmail.com`
    }

    set email(value){
    this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("salauddin", "654")
console.log(hitesh.password)
console.log(hitesh.email)



// Getter and Setter using defineproperty or (function Based)

// function User(email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function() {
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const gone = new User("khanshab@gmail.com", "Khan98");
// console.log(gone.email)
// console.log(gone.password)

// Getter and Setter using Object

// const User = {
//     _email: 's@sc.com',
//     _password: '654321',

//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     },

//     get password(){
//         return this._password.toUpperCase()
//     },

//     set password(value){
//         this._password = value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email)
// console.log(tea.password)