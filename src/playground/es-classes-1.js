
class Person {
    constructor(name = 'unknown') {
        this.name = name;
    }

    getGreeting() {
        return `Hi, I'm ${this.name}`;
    }
}

class Student extends Person {

}

const me = new Student('Vyacheslav Artemyev');
console.log(me.getGreeting());

const other = new Student();

console.log(other.getGreeting());