import Foundation


// we define enums by using case inside of it they cannot be compared with int directly
enum Animals {
    case cat, dog, rabbit
}

let cat = Animals.cat

if(Animals.cat == cat){
    "This is a cat"
}else {
    "This is nothing"
}

// in switch cae we don't need to cover all the cases if we decleare a default value

// when we compare enumerations its best to use switch because it controls all the cases and if it's not covers it warns if statements don't do that
switch cat {
case .cat:
    "this is a cat"
    break
case .dog:
    "this isa dog"
    break
case .rabbit:
    "this is a rabbit"
}

enum Shortcut {
    case fileOrFolder(path: URL, name: String)
    case wwwUrl(path: URL)
    case song(artist: String, songName: String)
}

// ! this makes the parameter optional just like the ? in js
let wwwApple = Shortcut.wwwUrl(path: URL(string: "https://berkerkelesoglu.dev")!)


switch wwwApple {
case .fileOrFolder(let path, let name):
    path
    name
    break
case .wwwUrl(let path):
    path
    break
case .song(let artist, let songName):
    artist
    songName
    break
}

// we can refactor the code above like below by using only one let for each case

switch wwwApple {
case let .fileOrFolder(path, name):
    path
    name
    break
case let .wwwUrl(path):
    path
    break
case let .song(artist,songName):
    artist
    songName
    break
}

// we can also check the case by using if

if case let .wwwUrl(path) = wwwApple {
    path
}

let lastSong = Shortcut.song(artist: "Bohmet", songName: "Erase")


// by using underscore we can ignore the artist argument and check the songName
if case let .song(_, songName) = lastSong {
    songName
}
// the if statement requirements is not met so path is not printed out
if case let .wwwUrl(path) = lastSong {
    path
}

// below we have champions enum for two branches and we decleare basketball and football champions and to get the winner from branch champions we created the getChampions func

enum Champions{
    case football(winner: String, year: Int)
    case basketball(winner: String, score: Int)
    
    // for computed property for winner we can do like this
    var winner: String {
        switch self {
        case let .football(winner,_),
        let .basketball(winner,_):
            return winner
        }
    }
}
let footballWinner = Champions.football(winner: "Fenerbahce", year: 2024)
footballWinner.winner // it's computed func value

let basketballWinner = Champions.basketball(winner: "FenerBasket", score: 100)
basketballWinner.winner // it's computed func value

func getChampions(from champion: Champions)-> String {
    switch champion{
    case let .football(winner, _):
        return winner
    case let .basketball(winner,_):
        return winner
    }
}
getChampions(from: footballWinner)
getChampions(from: basketballWinner)

// we can assign a value to enum by declearing the type
enum FamilyMembers: String {
    case father = "Dad"
    case mother =  "Mom"
    case brother = "Bro"
    case sister = "Sis"
}

// we can get the enum's value by using rawValue
FamilyMembers.brother.rawValue


enum FavoriteEmoji: String, CaseIterable {
    case blush = "😊"
    case rocket = "🚀"
    case fire = "🔥"
}


FavoriteEmoji.allCases
FavoriteEmoji.allCases.map(\.rawValue)

if let blush = FavoriteEmoji(rawValue: "😊"){
    "Found the blush emoji"
    blush
}else {
    "There is no blush emoji"
}

if let snow = FavoriteEmoji(rawValue: "❄️"){
    "We have snow emoji? Really??"
}else {
    "Yes we do not have a snow emoji"
}


// again just like in structures we can use mutating function in enums
enum Height {
    case short, medium, long
    mutating func makeLong(){
        self = Height.long
    }
}

var myHeight = Height.medium
myHeight.makeLong()


indirect enum IntOperations {
    case add(Int, Int)
    case subtract(Int, Int)
    case freeHand(IntOperations)
    
    func calculate(of operation: IntOperations? = nil) -> Int {
        switch operation ?? self {
        case let .add(lhs, rhs):
            return lhs + rhs
        case let .subtract(lhs, rhs):
            return lhs - rhs
        case let .freeHand(operation):
            return calculate(of: operation)
        }
    }
}
let freeHand = IntOperations.freeHand(.add(2, 8))
freeHand.calculate()
