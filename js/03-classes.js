var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// PROPERTIES
var Person = /** @class */ (function () {
    function Person() {
    }
    //2
    Person.prototype.sayHello = function () {
        console.log("Hello", this.firstName);
    };
    return Person;
}());
//4 
var kenn = new Person();
//5
kenn.firstName = "Kenn";
//6
kenn.sayHello();
//3
var phil = new Person();
//4
phil.firstName = "Phil";
phil.lastName = "Donahue";
//1                 //2  //3
var someVariableName = new Person();
// We declare a variable with our own custom name.
// We declare the type. It's a custom type of Person.
// We use the  keyword to instantiate a new instance.
// We call the class with parens. The parens invoke the constructor function.
// METHODS
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.sayHelloToFullName = function () {
        console.log("Hello", this.firstName + this.lastName);
    };
    return Person1;
}());
// Practice
// Create a method called sayHelloToFullName that says hello to someone by full name.
// Instantiate(create a new instance of) the person class.
// Set the first name property to 'Sheriff' and the last name property to 'Holler'.
// Call the sayHelloToFullName method on the instance of the class.
var sheriff = new Person1();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();
// CONSTRUCTORS
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
var battleship = new Game('Battleship', 'Hasbro');
// INHERITANCE
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
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
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
// ACCESSORS
//1
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //5
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    //4
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
var salaryResult = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
//# sourceMappingURL=03-classes.js.map