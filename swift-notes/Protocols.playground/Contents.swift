import Foundation


// in protocol we can create function without body in contrast with structure and classes and we can use them the fun with body in structure like below
protocol canBreathe {
    func breathe()
}

struct Animal: canBreathe {
    func breathe() {
        "Animal can breathe"
    }
}

struct Person: canBreathe {
    func breathe() {
        "Person can breathe"
    }
}

let cat = Animal()
cat.breathe()
let foo = Person()
foo.breathe()

// as we see above we didn't define a body for the function inside of the protocol and we can't do that. To do this, we should create and extension for the protocol

protocol canEat{
    func eat()
}
// by using extension we can give default behaviour to our function inside protocol
extension canEat{
    func eat(){
        "It can eat..."
    }
}
// we don't need to define func again bc it already has it inside protcol has default value
struct Rex: canEat{
    
}
let myDog = Rex()
myDog.eat()

// to play with the variables in protocol

protocol HasName {
    var name: String {get}
    var age: Int {get set}
}
// to create a function for hasName protocol we can use extension

extension HasName {
    func describeMe(){
        "I am \(name) and I am \(age) years old."
    }
    
   mutating func increaseAge(){
        self.age += 1
    }
}

// here we cannot use var for the name we should use let because in the protocol it only has getters no setters so its readonly
struct Dog: HasName {
    let name: String
    var age: Int
}

var ourDog = Dog(name: "Rex", age: 6)

ourDog.name
ourDog.age
ourDog.age += 1
ourDog.age
ourDog.describeMe()
ourDog.increaseAge()
ourDog.age


//for more example

protocol Vehicle {
    var speed: Int  {get set}
}

extension Vehicle {
    mutating func increaseSpeed(by value: Int){
        self.speed += value
    }
}
// inside of struct we can give initialize value also by doing init() or equailize it like below
struct Car: Vehicle {
    var speed: Int = 0
}

var myCar = Car()
myCar.speed
myCar.increaseSpeed(by: 10)
myCar.speed

// we can use struct object which extends to protcols in func to check their type for example.

func describe(object: Any){
    // here is for only checking by using is
    if(object is Vehicle){
        "This is is vehicle object"
    }else {
        "This is not a vehicle object"
    }
}
describe(object: myCar)

func increaseSpeedIfVehicle(obj: Any){
    if var vehicle = obj as? Vehicle {
        vehicle.speed
        vehicle.increaseSpeed(by: 10)
        vehicle.speed
    }else {
        "vehicle is not used here"
    }
}

increaseSpeedIfVehicle(obj: myCar)
// since we use struct we reinitialize it the default struct inside of the func above but if we use class of Car in respect of struc the value inside the class would have been changed
myCar.speed



