import Foundation

// intead of creacting a function beforehand to equalize a variable you can create variable functions like below

let add: (Int, Int) -> Int 
= { (lhs: Int, rhs: Int) -> Int in
    lhs + rhs
}

add(20,30)


// here are some closure examples a function can take a function as argument and when it takes it it can emit other arguments to the function to use

func customAdd(_ lhs: Int, _ rhs: Int, using myFunction: (Int, Int) -> Int) -> Int {
    myFunction(lhs,rhs)
}
customAdd(20, 30){
    (lhs:Int, rhs: Int) -> Int in
        lhs + rhs
}
func customNameCreate(_ firstName: String, _ lastName: String, using fullName:(String,String) -> String){
    fullName(firstName, lastName)
}

customNameCreate("Berker", "Kelesoglu"){
    (firstName: String, lastName: String) -> String in
    "\(firstName) \(lastName)"
}
func customInfoCreate(_ firstName: String, _ lastName: String, _ age: Int, using allInfos: (String, String, Int) -> String) -> String {
    allInfos(firstName,lastName,age)
}
 // 1
customInfoCreate("Berker", "Kelesoglu", 26){
    (firstName: String, lastName: String, age: Int) -> String in
    "My name is \(firstName) and my last name is \(lastName) and I am \(age) years old."
}

// the codes above can be written without writing their types and can be cleaned like this
// 2
customInfoCreate("Berker", "Kelesoglu", 26){
    (firstName, lastName, age) in
    "My name is \(firstName) and my last name is \(lastName) and I am \(age) years old."
}

// and also the function can be written by using only other arguments indexes
// 3
customInfoCreate("Berker", "Kelesoglu", 26){ "My name is \($0) and my last name is \($1) and I am \($2) years old."}

// eventualy 2 and 3 can be seem cleaner than the first one but the compiler tries to figure out what type the data is and less declearing the type of code more struggle will compiler have so try to prefer the first one


let ages = [20,30,26,23,44]
// we have ages and to store them ascending do like below and descending do lhs > rhs
ages.sorted(by: {(lhs: Int, rhs: Int) -> Bool in
    lhs < rhs
})
// but instead of doing this we already know the function will take numbers and return bool so we can also do like that in a shorter way
//descending
ages.sorted(by: >)
//ascending
ages.sorted(by: <)

func customAdd2(_ lhs: Int, _ rhs: Int, using plusFunction: (Int, Int) -> Int) -> Int {
    plusFunction(lhs, rhs)
}

customAdd(20,10){
    (lhs,rhs) in lhs + rhs
}

customAdd(20,30){
    $0 + $1
}

func plus10To(_ value: Int) -> Int {
    value + 10
}

func plus20to(_ value: Int) -> Int  {
    value + 20
}

func doAddition(on number: Int, using plusFunction: (Int) -> Int){
    plusFunction(number)
}

doAddition(on: 20){
    (number) in number + 20
}
doAddition(on: 30, using: plus10To(_:))

doAddition(on: 40, using: plus20to(_:))



    

