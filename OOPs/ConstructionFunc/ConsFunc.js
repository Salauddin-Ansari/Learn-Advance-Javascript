// This code is for Polymorphism
function getBirthYear() {
    return new Date().getFullYear() - this.age

}

function createUser(firstName, lastName, age) {
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear,
    }
    return user;
}
// console.log(createUser('pappu', 'yadav', 56));

const user1 = createUser('pappu', 'yadav', 56);
const user2 = createUser('Nitish', 'Kumar', 66);


// function getBirthYear() {
//     return new Date().getFullYear() - this.age

// }

// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear: createUser.commonMethods.getBirthYear
//     }
//     return user;
// }

// createUser.commonMethods = {
//     getBirthYear() {
//         return new Date().getFullYear() - this.age
//     }
// }
// // console.log(createUser('pappu', 'yadav', 56));

// const user1 = createUser('pappu', 'yadav', 56);
// const user2 = createUser('Nitish', 'Kumar', 66);