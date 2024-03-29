import Foundation

let myAge = 26
let yourAge = 22


if myAge > yourAge {
    "I am older than you"
} else if yourAge > myAge {
    "You are older than me"
}else {
    "we are at the same age"
}


let myMothersAge = myAge + 32
let doubleMyAge = myAge * 2


/// 1. unary prefix
let foo = !true
/// 2. unary postfix
let name = Optional("Berker")
type(of: name)
let unaryPostFix = name!
type(of: unaryPostFix)
/// 3. binary infix
let result = 1 + 2
let names = "Foo " + "Bar"


// when we write condition we can use two types
let age = 13
//let message: String
//
//if age >= 18 {
//    message = "You are an adult"
//}else {
//    message = "You are not an adult yet"
//}

let message = age >= 18 ? "You are an adult" : "You are not an adult yet"



