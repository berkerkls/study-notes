"use strict";
// When you create a variable you need to assign the type by using ":"
let age = 5;
let username = "Berker";
let isActive = true;
// any attribute is okay with anything that you assign
let data = "Hello";
// Here "number[]" attribute shows the element inside of the array have to be number
let ids = [1, 2, 3, 4, 5];
// Here "any[]" attribute shows that the elemenst inside of the array can be anything
let arr = ["Hello", 8, true];
// TUPLE 
// tuple enables us to define type of every single element by default by script as you see below
let person = [34, "Hello", false];
// You can create tuples inside of array which means you can define types of elements of an array which is inside of the other array
let workers;
workers = [
    [10, "Berker"],
    [11, "Kelesoglu"]
];
// UNIONS
// in Unions we use | to define types more than one that we wanted
let prodid;
prodid = 12;
prodid = "Berker";
// ENUMS
// We can define items in exact order by giving them default(0) or the starting number. If no value given to first item them its value will be zero and others will go in order numerically. You can also define string value to each item as you see in Direction2.
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 34] = "Up";
    Direction1[Direction1["Down"] = 35] = "Down";
    Direction1[Direction1["Left"] = 36] = "Left";
    Direction1[Direction1["Right"] = 37] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
// OBJECTS
// To define types to the objects you can define types each value like this. However its too messy. Check below
const user = {
    id: 1,
    name: "Berker"
};
const newUser = {
    id: 4,
    name: "Berker"
};
// TYPE ASSERTION
// sometimes we want some varibles in some exact type so in this case we can use type assertion in two different way.
let cid = 1;
let customerId = cid;
let secondCusId = cid;
// FUNCTIONS
// When we create function, we usually define types of arguments in function and also you can define the type of return value just after the paranthesis.
function addNumber(x, y) {
    return x + y;
}
// console.log(addNumber(1, "2")) This won't work because second parameter is not a number
// console.log(addNumber(1,2)) This works
// Void
// Since it won't return anything we can define the value that would return void and also you can use unions for function parameters
function example(message) {
    console.log(message);
}
const customer = {
    id: 8,
    name: "Berker"
};
const acc = (x, y) => x + y;
const sub = (x, y) => x + y;
// *** CLASSES ***
// Check code first * 
// userName.id = 10 this changes the id of userName without private or protected
// username.id = 5 this will give you error by private attribute
// However if you use protected you can reach them in extended class. Check below for extended classes.
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // You can also create method in classes
    register() {
        return `${this.name} is now registered`;
    }
}
const userName = new Person(0, "New User");
const customerName = new Person(0, "New Customer");
class CustomerRegister {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// EXTEND CLASSES
// By extending we can use properties that we created in other classes here it is Person class
class Developer extends Person {
    constructor(id, name, position) {
        // To use other properties in other classes I used super() method so you don't need to use this.id etc.
        super(id, name);
        this.position = position;
    }
}
const dev = new Developer(8, "Berker", "Frontend developer");
// console.log(dev) So you can access the employee
// console.log(dev.position) So you can accesss the position of dev also
// console.log(dev.register()) You can also access the function inside of other class by using extends that class.
// GENERICS
// We have an empty array and we should define it any because in function we define <T> as the type which is just a placeholder and it's also same with any
let emptyArr = [];
// Here we use <T> as a placeholder because we want to decide what type will be inside of the array when we define an array.
function getArray(items) {
    return emptyArr = emptyArr.concat(items);
}
// Here when we define the array we use <number> to specify our array will contain only numbers
let numArr = getArray([1, 2, 3, 4, 5]);
// Here when we define the array we use <string> to specify our array will contain only strings
let stringArr = getArray(["Berker", "Developer", "berkerkls"]);
// numArr.push("adam") This will throw err because we defined <number> for numArr
// numArr.push(25) This will work bc 25 is a number
// stringArr.push(74) This won't work because 74 is a number not a string we define <string> for stringArr
console.log(numArr, stringArr, emptyArr);
