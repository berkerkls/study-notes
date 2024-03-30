import Foundation

struct Person {
    let name: String
    let age: Int
}

let person = Person(name: "Murtaa", age: 14)

person.name
person.age

// when we create structure we may want to initialize with some default value so we can use init func

struct Computer {
    let name: String
    let computer = "Macbook Air M3 Black" // so you don't need to use init func you can assign the value directly
//    init(name: String){
//        self.name = name
//        self.computer = "Macbook Air M3 Black"
//    }
}

let myComputer = Computer(name: "my computer")

myComputer.computer
myComputer.name

// if we want to have a dynamic value inside of our structure we can use different methods

struct Person2 {
    let firstName: String
    let lastName: String
    var fullName: String {
        "\(firstName) \(lastName)"
    }
    // instead of using init func like below we can make it mutable variable and write like a function
//    init(firstName: String, lastName: String){
//        self.firstName = firstName
//        self.lastName = lastName
//        self.fullName = "\(firstName) \(lastName)"
//    }
}



let me = Person2(firstName: "Berker", lastName: "Kelesoglu")
// and these properties are get only properties so you can not assign them a new value
me.firstName
me.lastName
me.fullName

// to mutate the value inside of structure we can use mutating attribute

struct Car {
    var currentSpeed: Int
    mutating func drive(speed: Int){
        currentSpeed = speed
    }
}

let speedOfCar = Car(currentSpeed: 10)
//speedOfCar.drive(speed: 30) we cannot do that because speedOfCar is let its a constant value

var carSpeed = Car(currentSpeed: 49)
carSpeed.drive(speed: 55)
carSpeed.currentSpeed


let copy = carSpeed
carSpeed.drive(speed: 60)
// here you can see we copy it carSpeed and after we change it its value but copied structure's currentSpeed didn't change which is something perfect if you are js developer you may liken it with structuredClone
copy.currentSpeed
carSpeed.currentSpeed

// there is an another way to copy the structures

struct Phone {
    let model: String
    let year: Int
    let type: String
    func copy(model: String, year: Int) -> Phone{
        Phone(model: model, year: year, type: self.type)
    }
}

let phone1 = Phone(model: "iPhone 14", year: 2023, type: "smart phone")

let phone2 = phone1.copy(model: "iPhone 15", year: 2024)

phone1.model
phone2.model



