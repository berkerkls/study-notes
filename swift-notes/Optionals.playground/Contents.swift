import Foundation


// we use ? as optinal parameter after the type of parameter and give initiliaze value which is nil
func multiplyByTwo(_ value: Int? = nil) -> Int {
    if let value {
        return value * 2
    }else {
        return 0
    }
}

multiplyByTwo()

func checkAge(_ age: Int? = 0){
    guard age != nil else {
        "Age shouldn't be nil"
        return
    }
    if age ?? 0 > 18 {
        "You are adult"
    }
}
checkAge()

let age2 : Int? = 0
func checkAge2(){
    guard let age2 else {
        "Age is nil"
        return
    }
    
    "Age is not nil and the value is \(age2)"
}

checkAge2()

switch age2{
case .none:
    "there is no value expected"
    break
case let .some(value):
    "There is value as \(value)"
    break
}


struct Person{
    let name: String
    let address: Adress?
    struct Adress {
        let firstLine: String?
    }
}

let person: Person = Person(name: "murta", address: nil)

if let fooFirstAddressLine = person.address?.firstLine {
    fooFirstAddressLine
}else {
    "Person doesn't have a address"
}


let bar: Person? = Person(name: "Murta", address: Person.Adress(firstLine: "Zaa street"))

if bar?.name == "Murta" && bar?.address?.firstLine == "Zaa street"{
    "its better"
}else {
    "whats happening"
}

