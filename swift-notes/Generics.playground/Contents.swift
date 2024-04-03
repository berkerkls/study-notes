import Foundation
/// used to avoid same function multiple times

// here is a function to work with numbers and there are many types like integer double cg we can write three func for each but we should not do that so can use generics <N: Numeric> as example
func perform<N: Numeric>(_ op:(N,N)-> N, on lhs:N , and rhs: N)-> N{
    op(lhs,rhs)
}

// Generics can understand what type the function will return and from the arguments that you assign if your arguments integer it returns integer
let foo = perform(+,on: 4,and: 5)
foo
print(type(of: foo)) // so the type int
let zoo = perform(*,on: 10.3,and: 5.3)
print(type(of: zoo)) // so the type Double

protocol CanJump {
    func jump()
}

protocol CanRun {
    func run()
}

struct Person: CanJump, CanRun {
    func jump() {
        "is jumping"
    }
    func run() {
        "is running"
    }
}


func jumpAndRun<T: CanRun & CanJump>(_ value: T){
    value.jump()
    value.run()
}

let person = Person()
jumpAndRun(person)

extension [String] {
    func findLongestString() -> String? {
        self.sorted { (lhs: String, rhs: String) -> Bool in
            lhs.count > rhs.count
        }.first
    }
}

["murtazaaaaaa", "foobar", "zuubar"].findLongestString()


protocol View {
    func addSubView(_ view: View)
}

extension View{
    func addSubView(_ view: View){
        
    }
}

struct Button: View {
 
}

protocol PresentableAsView {
    associatedtype ViewType : View
    func produceView()-> ViewType
    func configure(superView: View, thisView: ViewType)
    func present(view: ViewType,on SuperView: View)
}

extension PresentableAsView {
    func configure(superView: View, thisView: ViewType){
        
    }
    
    func present(view: ViewType, on SuperView: View){
        SuperView.addSubView(View.self as! View)
    }
}

struct MyButton: PresentableAsView {
    func produceView() -> Button {
        Button()
    }
    func present(view: Button, on SuperView: any View) {
    
    }
}

extension PresentableAsView where ViewType == Button {
    func doSomethingWithButton(){
      "This is a button"
    }
}

let button = MyButton()
button.doSomethingWithButton()


extension [Int]{
    func average() -> Double{
        Double(self.reduce(0,+)) / Double(self.count)
    }
}
[1,2,3,4,5,6].average()


