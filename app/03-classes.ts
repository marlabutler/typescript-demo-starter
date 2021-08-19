// PROPERTIES
class Person {
    //1
    firstName: string;
    lastName: string;

    //2
    sayHello(){                     //3
        console.log("Hello", this.firstName);
    }
}

//4 
let kenn: Person = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();


//3
let phil: Person = new Person();

//4
phil.firstName = "Phil";
phil.lastName = "Donahue";

    //1                 //2  //3
let someVariableName: Person = new Person();

// We declare a variable with our own custom name.

// We declare the type. It's a custom type of Person.

// We use the  keyword to instantiate a new instance.

// We call the class with parens. The parens invoke the constructor function.


// METHODS
class Person1 {
    firstName: string;
    lastName: string;

    sayHelloToFullName(){                     
        console.log("Hello", this.firstName + this.lastName);
    }
}

// Practice
// Create a method called sayHelloToFullName that says hello to someone by full name.

// Instantiate(create a new instance of) the person class.

// Set the first name property to 'Sheriff' and the last name property to 'Holler'.

// Call the sayHelloToFullName method on the instance of the class.
let sheriff: Person1 = new Person1();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();

// CONSTRUCTORS
class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');


// INHERITANCE
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topsSpeed: number;
}


// Practice
// Create a class called  with 3 properties.

// Create two subclasses, maybe Bear and Tiger, that each has a property unique.

// Instantiate both classes and add values for properties to each.

// class Animal { (had to comment out to resolve red squiggly in interfaces.ts file)
//     type: string;
//     weight: string;
//     extinct: boolean;
// }

// class Mammal extends Animal {
//     isWarmBlooded: boolean;
// }

// PARAMETER PROPERTIES
// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

// let ikea: Store = new Store('Ikea', 'Fishers');

// REFACTOR CODE (from above) 
// This type of constructor is used in almost every Angular component that you'll see these days.
class Store {
    constructor(public name: string, public city: string){}
    }

let ikea: Store = new Store('Ikea', 'Fishers');

// ACCESSORS
    //1
class Employee extends Person{
    //2     //3
    private _salary: number;

    //5
    getSalary(): string {
        return this._salary.toString();
    }

            //4
    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
