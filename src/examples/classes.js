class Person{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    calculateAge(){
        return new Date().getFullYear() - this.year;
    }

    greeting(text){
        return `${text}, my name is ${this.name}, i am ${this.calculateAge()} years old.`;
    }
}

class Student extends Person {
    constructor(name,year,studentNumber){
        super(name,year);
        this.studentNumber = studentNumber;
    }

    studMessage(text){
        let str = super.greeting(text);
    }
}

const p1 = new Student("Emrah",1988);
const p2 = new Person("Bora",1990);

//console.log(p1.calculateAge());
//console.log(p2.calculateAge());

console.log(p1.greeting("Hello"));