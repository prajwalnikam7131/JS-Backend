// person student teachear

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, Welcome ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, percentage) {
        super(name, age);
        this.percentage = percentage;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

const student1 = new Student("Prajwal", 24, 88.88);
console.log(student1);

const teachear1 = new Teacher("Payal", 38, "Physics");
console.log(teachear1);

const person1 = new Person("Rahul", 48);
console.log(person1);
console.log(person1.greet());