class CreateUser {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    // static hi = 'hello';
    static {
        console.log(this)
        console.log("Hello")
        this.hi = 'hello';

        this. getBirthYear = function () {
            return new Date().getFullYear() - this.age
            }
    }

    getBirthYear() {
        return new Date().getFullYear() - this.age
        }

    getFullName = function() {
        return this.firstName + ' ' + this.lastName
        }    
}


const user1 = new CreateUser('Aman','Mishra',25);
const user2 = new CreateUser('Khan','Sahab',35);