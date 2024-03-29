import Foundation


let myAge = 26
let myName = "Berker"
let yourName = "Foo"
let yourAge = 26

if myAge > 26 {
    "Go lower"
} else if myAge < 26 {
    "Go higher"
}else {
    "You guessed correctly"
}

if myName == "Berker" && myAge == 26 {
    "I guessed it correctly one of two or both of them"
}else if myAge == 26{
    "I guessed the age correct"
}else {
    "You are bullshit"
}
/// if and else logic is definitely same with javascript

if(myName == "Berker" && myAge == 26) && (yourName == "Foo" || yourAge == myAge){
    "My name is Berker and myAge is 26 and your name is Foo or your age equals to my age"
}
