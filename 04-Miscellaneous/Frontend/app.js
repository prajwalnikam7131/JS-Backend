
// ## Factory Function :
// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// const p1 = personMaker("Ram", 24);
// const p2 = personMaker("shaam", 24);

// console.log(p1);
// console.log(p2);

// console.log(p1.talk === p2.talk); 
// # this factory function always create a new copy. this is the disadvantage of factory function.


// ## New Operator :
// # Constructors : It does not return anything and Constructor name start with Capital Letter.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("Prajwal", 24);
// let p2 = new Person("Raftaar", 24);

// console.log(p1);
// console.log(p2);


// ## Class :

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("Prajwal", 24);
let p2 = new Person("Raftaar", 24);


// ## Inheritance :