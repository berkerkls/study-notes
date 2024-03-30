import Foundation

// here there is no return value but it print out the string it's something specific for playground otherwise you need to use print() method
func functionWithNoArgument(){
    "There is no argument in this function"
}

functionWithNoArgument()

func plusTwo(value: Int){
    let newValue = value + 2
}

plusTwo(value: 4)


// here by using -> we declare the type of the value that func return and by using _ we declare that we don't need to right arguments name when we call the function as we see below
func customPlus(_ lhs: Int, _ rhs: Int) -> Int{
    lhs + rhs
}

customPlus(10,20)

// and if you call a function but if you are not assigning its value to any variable swift will alert error normally to get away from it you can use discardableResult

@discardableResult
func myCustomAdd(_ lhs:Int, _ rhs: Int) -> Int{
    lhs + rhs
}


// here we can declare an argument inital value as you see below and then we can change it when we call the func by passing argument and when we return we should use back slash when we return dynamic string just like usage of backticks in js
func getFullName(firstName: String = "Murta", lastName: String = "Zaa"){
    "\(firstName) \(lastName)"
}

getFullName()
getFullName(firstName: "Moba")
getFullName(lastName: "Zuza")
getFullName(firstName: "Moba", lastName: "Zuza")


