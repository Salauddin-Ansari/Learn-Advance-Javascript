class CreateUser {
    constructor(firstName, lastName, age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
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

console.log(user1)
console.log(user2)