import Foundation


extension Int {
    func plusTwo() -> Int {
        self + 2
    }
}

let two = 2
two.plusTwo()


// when we start with first and last name we can only use them
struct Person {
    var firstName: String
    var lastName: String
}

// but when we create an extension and init it with an argument we have a custom argument that we can manipulate the variables inside struct
extension Person {
    init(fullName: String) {
        let component = fullName.components(separatedBy: " ")
        self.firstName = component.first ?? fullName
        self.lastName = component.last ?? fullName
    }
}

var newPerson = Person(fullName: "Foo Bar")
newPerson.firstName
newPerson.lastName


// first we created the protocol as simple

protocol carInfos {
    var info: String {get}
    func runInfo() -> String
}
// and we created runInfos body by using extension

extension carInfos {
    func runInfo()-> String {
        "\(info)"
    }
}

// and we created structure but without our protocol

struct Car {
    var model: String
    var year: Int
}

// and with structure we created an object

let modelX = Car(model: "Tesla", year: 2020)

// here by using extension we initialized the car structure with the carInfos protocol and we are able to use our structure value to equalize to our info

extension Car: carInfos{
    var info: String {
        "\(self.model) is manufactured in \(self.year)"
    }
}

modelX.runInfo()


// when we use extension with classes we can use convenience to init the classes values
class Integer {
    let value: Int
    init(value: Int) {
        self.value = value
    }
}

extension Integer {
    convenience init() {
        self.init(value: 2)
    }
}

Integer().value





