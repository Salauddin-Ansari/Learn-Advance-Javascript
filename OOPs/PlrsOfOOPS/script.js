const user = {
    firstName: "Salauddin",
    lastName: "Ansari",
    age: 21,

    getAgeYear: function() {
        return new Date().getFullYear() - user.age

    }
};
        console.log(user.getAgeYear);


// function createUser(firstName, lastName, age) {
//     const user = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age,
//     }
//     return user;
// }
// console.log(createUser('pappu', 'yadav', 56));

// shortcut of above code
// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getAgeYear() {
//             return new Date().getFullYear() - user.age

//         }
//     }
//     return user;
// }
// // console.log(createUser('pappu', 'yadav', 56));

// const user1 = createUser('pappu', 'yadav', 56);
// const user2 = createUser('Nitish', 'Kumar', 66);

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]


// This code is for Polymorphism

// function getBirthYear() {
//     return new Date().getFullYear() - this.age
// }
// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear,

//         }
   
//     return user;
// } 
// // console.log(createUser('pappu', 'yadav', 56));
// const user1 = createUser('pappu', 'yadav', 56);
// const user2 = createUser('Nitish', 'Kumar', 66);

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// Note : This code is violate the abstraction and encapsulation.
// Hiding the complexity is called Abstraction.
// Write code in under the function is called encapsulation.

// To improve the code or better user experience 

// function createUser(firstName, lastName, age) {
//     const user = {
//         firstName,
//         lastName,
//         age,
//         getBirthYear: createUser.commonMethods.getBirthYear

//         }
   
//     return user;
// } 
// createUser.commonMethods = {
//       getBirthYear() {
//         return new Date().getFullYear() - this.age
//     },
// }
// // console.log(createUser('pappu', 'yadav', 56));
// const user1 = createUser('pappu', 'yadav', 56);
// const user2 = createUser('Nitish', 'Kumar', 66);

// use the new and this keyword

// function createUser(firstName, lastName, age) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
// }
     
// const user1 = new createUser('pappu', 'yadav', 56);
// const user2 = new createUser('Nitish', 'Kumar', 66);

// This code is for Inheritence

// function createUser(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//   }

//   createUser.prototype.getBirthYear = function() {
//     return new Date().getFullYear - this.age
//   }
       
//   const user1 = new createUser('pappu', 'yadav', 56);
//   const user2 = new createUser('Nitish', 'Kumar', 66);