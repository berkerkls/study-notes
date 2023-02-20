// When you create a variable you need to assign the type by using ":"
let age: number = 5
let username: string = "Berker"
let isActive: boolean = true
// any attribute is okay with anything that you assign
let data: any = "Hello" 
// Here "number[]" attribute shows the element inside of the array have to be number
let ids: number[] = [1,2,3,4,5]
// Here "any[]" attribute shows that the elemenst inside of the array can be anything
let arr: any[] = ["Hello", 8, true]

// TUPLE 

// tuple enables us to define type of every single element by default by script as you see below
let person: [number, string, boolean] = [34,"Hello", false]

// You can create tuples inside of array which means you can define types of elements of an array which is inside of the other array
let workers: [number, string][]

workers = [   
   [10, "Berker"],
   [11, "Kelesoglu"]
]

// UNIONS

// in Unions we use | to define types more than one that we wanted
let prodid: string | number
prodid = 12
prodid = "Berker"

// ENUMS

// We can define items in exact order by giving them default(0) or the starting number. If no value given to first item them its value will be zero and others will go in order numerically. You can also define string value to each item as you see in Direction2.
enum Direction1 {
    Up = 34,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// OBJECTS

// To define types to the objects you can define types each value like this. However its too messy. Check below
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name:"Berker"
}

// Here, we first created a type for our object and we defined this type to our object directly so it looks neat and nice 
type User = {
    id: number,
    name: string
}

const newUser: User = {
    id: 4,
    name: "Berker"
}

// TYPE ASSERTION
 
// sometimes we want some varibles in some exact type so in this case we can use type assertion in two different way.
let cid: any = 1

let customerId = <number>cid
let secondCusId = cid as number

// FUNCTIONS

// When we create function, we usually define types of arguments in function and also you can define the type of return value just after the paranthesis.
function addNumber(x: number,y: number):number {
    return x + y
}

// console.log(addNumber(1, "2")) This won't work because second parameter is not a number
// console.log(addNumber(1,2)) This works

// Void

// Since it won't return anything we can define the value that would return void and also you can use unions for function parameters
function example(message: string | number):void {
    console.log(message)
}

// example(true) this will show you error but it accepts every value to return it


// INTERFACES

// As you see interfaces works in the same way as types but the only difference is you can't use interface with primitives and unions
interface userInt {
    readonly id: number,
    name: string,
    age?: number
}

const customer: userInt = {
    id: 8,
    name: "Berker"
}
// Above there is ? next to age it means its optional you don't have to use also before the id there is readonly which means you can't change the initial state

//  Interface in functions

// Since we define inside of the interface in  acc and sub functions we have to define them as a number.
interface MathFunc {
    (x: number, y: number):number
}
const acc: MathFunc = (x:number, y:number):number => x + y
const sub: MathFunc = (x:number, y:number):number => x + y

// *** CLASSES ***

// Check code first * 
// userName.id = 10 this changes the id of userName without private or protected
// username.id = 5 this will give you error by private attribute

// However if you use protected you can reach them in extended class. Check below for extended classes.

class Person {
    private id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    // You can also create method in classes
    register() {
        return `${this.name} is now registered`
    }
}

const userName = new Person(0, "New User")
const customerName = new Person(0, "New Customer")

// lets create interface for our new class
// So you can implement interface to a class like this.

interface customerInterface {
    id: number,
    name: string,
    // When we define a function after colon we define returned value
    register() : string
}

class CustomerRegister implements customerInterface {    
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(): string {
        return `${this.name} is now registered`   
    }
}

// EXTEND CLASSES

// By extending we can use properties that we created in other classes here it is Person class
class Developer extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        // To use other properties in other classes I used super() method so you don't need to use this.id etc.
        super(id,name)
        this.position = position
    }
}

const dev = new Developer(8,"Berker","Frontend developer")

// console.log(dev) So you can access the employee
// console.log(dev.position) So you can accesss the position of dev also

// console.log(dev.register()) You can also access the function inside of other class by using extends that class.

// GENERICS

// We have an empty array and we should define it any because in function we define <T> as the type which is just a placeholder and it's also same with any
let emptyArr: any = []

// Here we use <T> as a placeholder because we want to decide what type will be inside of the array when we define an array.
function getArray<T>(items: T[]): T[] {
    return emptyArr = emptyArr.concat(items)
}

// Here when we define the array we use <number> to specify our array will contain only numbers
let numArr = getArray<number>([1,2,3,4,5])
// Here when we define the array we use <string> to specify our array will contain only strings
let stringArr = getArray<string>(["Berker","Developer","berkerkls"])

// numArr.push("adam") This will throw err because we defined <number> for numArr
// numArr.push(25) This will work bc 25 is a number
// stringArr.push(74) This won't work because 74 is a number not a string we define <string> for stringArr
console.log(numArr,stringArr,emptyArr)






