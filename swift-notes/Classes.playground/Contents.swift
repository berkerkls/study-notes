import Foundation


class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func increaseAge() {
        self.age += 1
    }
}


let zaa = Person(name: "Murta", age: 25)

zaa.age
zaa.increaseAge()
zaa.age


// here even if you create a new instance like foo and equalize it to zaa you change the foo age but zaa age also changing because classes are reference type and inner value always changes
zaa.age
let foo = zaa
foo.increaseAge()
foo.age
zaa.age

// while we use private(set) we can only mutate the value with inner func inside of the classes
class Person2 {
    private(set) var age: Int
    
    init(age: Int) {
        self.age = age
    }
    
    func increaseAge(){
        self.age += 1
    }
}

let bar = Person2(age: 19)
bar.age
bar.increaseAge()
bar.age

// designated initializer

class Phone {
    var manufacturer = "Apple"
    var model: String
    var year: Int
    
    init(){
        self.model = "iPhone 16"
        self.year = 2024
    }
    
    init(model:String, year: Int) {
        self.model = model
        self.year = year
    }
}

class OldPhone: Phone {
    override init() {
        super.init(model: "iPhone 15", year: 2023)
    }
}

let old = OldPhone()
old.model
old.year
old.manufacturer

