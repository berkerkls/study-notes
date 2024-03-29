import Foundation

// let is used for constant values and var is used for mutable values
let myName = "Berker"
var yourName = "Foo"


// we can mutate the array variable by using append method like push method in JavaScript
var names = [
    myName,
    yourName
]
names.append("Bar")
names.append("Baz")


// we can create an instance by equalizing a value but if we change the second variable first one won't be effected
let name = "Car"
var name2 = name

name2 = "Cycle"
name
name2

// here even if we created an old array by using let and let is for constants we can change its value by NSMutableArray but it's something not often
let oldArray = NSMutableArray(
array: ["Foo","Bazz"])
oldArray.add("Bar")

// why is NSMutableArray is not used quite often is because even if the oldArray is created by let as constant its value can be changed so it's confusing for developers
var newArray = oldArray
newArray.add("Zoo")
oldArray
newArray


// here also i wanna show that even if its let variable you can change it by copying it too so but try to not to use it but you cannot change its value directly
let someNames = NSMutableArray(array: ["Name", "Name2"])

func changeTheArray(_ array: NSMutableArray){
    let copy = array as NSMutableArray
    copy.add("Foo")
}
changeTheArray(someNames)
someNames








