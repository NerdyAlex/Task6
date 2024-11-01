
// let x = (Math.random() * 5) + 1
// x = Math.floor(x)
// console.log(x)



let name1 = "Lexy Micheal"
// let num = "1234-567-890"
// console.log(name1.length)
// console.log(name1.indexOf("l"))
// console.log(name1.lastIndexOf("x"))
// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())

// console.log(num.replaceAll("-", " "))
// let firstName = name1.slice(0, name1.indexOf(" "))
// let lastName = name1.slice(name1.indexOf(" ") + 1)

// console.log(`${firstName} is my first name`)
// console.log(`${lastName} is my sur name`)
 



















// let age = 4;


// switch(true){
//     case age >= 100:
//         window.alert("You are too old");
//         break;

//     case age >= 18:
//         window.alert("You are too old");
//         break;

//     case age <= 0:
//         window.alert("You are not born yet");
//         break;

//     case age < 18:
//         window.alert("You are a child");
//         break;
//     default:
//         console.log("You Are Welcome Strange Visiter")

// }

// if(age >= 100){
//     window.alert("You are too old")
// }
// else if(age >= 18){
//     window.alert("You are a adult")
// }
// else if (age <= 0) {
//     window.alert("You are not born yet")
// }
// else if(age <= 18){
//     window.alert("You are a child")
// }
//  console.log("You Are Welcome Strange Visiter")

// let pha = "R"

// switch (pha) {
//     case "A":
//         window.alert("You did great!");
//         break;

//     case "B":
//         window.alert("You did good!");
//         break;

//     case "C":
//         window.alert("You did okay!");
//         break;

//     case "D":
//         window.alert("You passed ... barely");
//         break;

//     case "F":
//         window.alert("You Failed");
//         break;

//     default:
//         console.log(pha, "is not a real grade")

// }







// let temp = 10;
// let sunny = true;

// if (temp >= 30 || temp <= 0 && !sunny) {
//     console.log("the weather is bad!")
// }
// else{
//     console.log("the weather is good!")
// }


// for(let run = 1; run <= 100; run++){
//     if (run % 3 == 0 && run % 5 == 0) {
//         console.log("FizzBuzz")
//         continue
//     }
//     else if (run % 3 == 0){
//         console.log("Fizz")
//         continue
        
//     }
//     else if (run % 5 == 0) {
//         console.log("Buzz")
//         continue
        
//     }

//     console.log(run)
// }
// let run = 1

// while(run <= 10){   
//     if (run % 3 == 0) {
//         console.log("fizz")
        


//     }
//     else if (run % 5 == 0) {
//         console.log("Bizz")

//     } 
//     console.log(run++)

    
// }
// console.log("Hello, world!")

// let sign = "#"
// let rect = document.querySelector('#rect');
// let row = window.prompt("No horials");
// let col = window.prompt("No vertials");

// for(let i = 1; i <= row; i+=1){
//     for (let j = 1; j <= col; j += 1){
//         rect.innerHTML += sign
//     }
//     rect.innerHTML += `<br/>`;
// }



// let correct = document.querySelector("#correct")

// let guess = Math.round(Math.random() * 3)
// let input = window.prompt("enter a number")
// let count = 0


// if(guess === input){
//     correct.textContent = "Correct"
// }


// let min = 1
// let max = 6
// let correct = document.querySelector("#correct")
// let guess = Math.random() * (max-min) + min
// guess = Math.floor(guess)
// // console.log(Math.floor(guess))

// let counter = true

// while(counter){
//     let input = window.prompt("enter a number between 1 - 5")
//     input = Number(input)
//     if (guess == input){
//         correct.textContent = `CORRECT the answer is, ${guess}`
//         counter = false
//     }
        
// }
// 


// function add(x, y, z){
//     return x + y + z
// }
// function sub(x, y, z) {
//     return x - y - z
// }

// // let x = window.prompt("Minutes")
// // let y = Number(window.prompt("Y"))
// // let z = Number(window.prompt("Z"))

// // console.log(`the answer is: ${sub(x, y, z)}`)


// function check(x){
//     x = Number(x)
//     return x % 2 === 0 ? "EVEN!!" : "ODD!!"

// }

// function emailchecker(){
//    return x.includes("@") && x.includes(".com") ? "VERIFIED" : "ERROR"
// }

// function secondConverter(x){
//     return `that is ${x * 60} seconds`
// }
// function squared(x){
//     return x * x
// }

// function cars(){
//     let carName = "toyota"

//     return `My car is a ${carName} and yours is?`
// }
// function toC(){
//     let f = Number(window.prompt("Enter F"))
//     return (f - 32) * 5 / 9 + "C"
// }

// console.log(toC())

// let grade = window.prompt("Enter ").toUpperCase()

// switch(grade){
//     case "A":
//         console.log("You did great");
//         break
//     case "B":
//         console.log("You did good");
//         break
//     case "C":
//         console.log("You average");
//         break
//     case "D":
//         console.log("You passed barely");
//         break
//     case "F":
//         console.log("You failed");
//         break
//     default:
//         console.log(grade, "is not a grade");
// }


// loops

// let list = ["lexy", "ixy", 0, "people"]

// for(let i = 1; i <= 4; i++){
//    console.log(i)
//     for (let j = 1; j <= 3; j++) {
//         console.log("this is j", j)
//     }
   
// }


let run = 0

// do {
//     run++
//     if (run === 3) {
//         continue;
//     }
//     console.log(run)
// }
// while(run <= 10){

// }

// let named = {name:"lexy", age:17, gender: "f"}


// for(x in named){
//     console.log(named[x])
// }

// let list = ["lexy", "ixy", 5, "people"] 

// for (i of "lexy"){
//     console.log(i)
// }
// let input = window.prompt("Enter the word lexy to stop");


// while(input !=="lexy"){
//     input++
//     console.log("Bad")
// }
// console.log("Good")

// function print(x){
//     console.log(x)
// }
// list.forEach(print)

// collect n  and n-1 n-2 
// 4, 3 2 1

// let n = Number(window.prompt("enter"))
// function fac(n){
    
    
//     for(let i = 1; i <= n; i++ ){
//         console.log(i)
//         if(i === 0){
//             break
//         }
//     }
// } 


// fac(n)




// let username;
// // if the condition while loop is true it will keep on repeating untill it's not
// // 
// do{
//     username = window.prompt("name")
//     if(Number(username) === 1){
//         console.log("escaped")
//         break
//     }
//     console.log(username, "welcome")
// } while(username === " " || username == null)


// let username = "";

// while(username===''){
//     username= window.prompt(" ")
//     console.log("Again")
// }
// console.log("Welcome")



// for(i = 1; i<=15; i++){
    
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzbizz")
//         continue
       
//     }
//     else if (i % 3 === 0) {
//         console.log("fizz")
//         continue
//     }
//     else if (i % 5 === 0) {
//         console.log("bizz")
//         continue
//     }
//     console.log(i)
// }
// let row = Number(window.prompt("# of rows"))
// let cols = Number(window.prompt("# of cols"))
// let correct = document.getElementById("correct")
// let sign = "*"

// for(let i = 1; i <= row; i++){
    
//     for (let j = 1; j <= cols; j++) {
//         correct.innerHTML +=  sign
//     }
    
//     correct.innerHTML += "<br/>"
    
// }

// let area;
// let width = window.prompt("Enter your width: ")
// let length = window.prompt("Enter your lenght: ")

// area = Area(width, length)

// console.log("The area is:", area, "cm")

// function Area(w, l){
//     return w * l
// }



 // condition ? if ture exist me : if not exist me


// console.log(checkAge(30))

// function checkAge(age){
//     return age <= 18 ? "child" : "adult"
// }


// let num = 0.25

// // num = num.toLocaleString("en-GH", {style: "currency", currency: "GHC"})
// // num = num.toLocaleString(undefined, {style: "percent"})

// num = num.toLocaleString(undefined, {style: "unit", unit: "centimeter"})
// console.log(num)



// let input = document.getElementById("input")
// let sbtbtn = document.getElementById("sbtbtn")

// // how many guess can be may stored in 
// let guessing = 0
// let guess = Math.floor(Math.random() * 4 + 1)



// //to reset the game when user guess right
// function reset(){
//     // resetting all the variables
//     guessing = 0
//     guess = Math.floor(Math.random() * 4 + 1)
//     input.value = ""
// }


// function game(){
//     //create a btn to start by click
//     sbtbtn.onclick = function(){
//         //turn input value to number
//         let new_input = Number(input.value)

//         // increase the guessing vari by 1
//         guessing++

//         //check if the input is equall to the guess
//         if (new_input == guess) {
//             // print out message
//             alert(`${guess} is a correct guess. Took you ${guessing} guesses`)

//             //reeset after the user guessed right
//             reset()
//         }
//         // checkif the input is bigger than guess
//         else if (new_input > guess) {
//             alert("your guess is too big")
//         }
//         // checkif the input is smaller than guess
//         else if (new_input < guess) {
//             alert("your guess is too small")
//         }
//     }
// }


// //run game
// game()

//project
//  temp coverter it can convert a temp to fariher or celius
// 
// test run




// let temp = 32

// //takes a variabel and covert it to ceilius
// function toC(temp){
//     return (temp - 32) * 5 / 9 + "C"
// }
// let resultc = toC(temp)
// console.log(Math.round(resultc))

// //takes a variabel and covert it to Fahrenheit
// function toF(temp){
//     return (temp * 9 / 5) + 32 + "F"
// }

// let resultf = toF(temp)
// console.log(Math.round(resultf))


// // create variables to store and use the user data

// let input = document.getElementById("input")
// let cel = document.getElementById("cel")
// let feh = document.getElementById("feh")
// let sbtbtn = document.getElementById("sbtbtn")
// let ans = document.getElementById("answer")


// sbtbtn.onclick = function(){
//     // collect the user input and convert  into whole number and store in new var.
//     let temp = Math.floor(Number(input.value))
    
//     // IF CEL is checked 
//     if(cel.checked){
//         //call out the toC func and store it
//         let resultc = toC(temp)
            
//         // display it on the docume
//         ans.textContent = resultc
//     }
//     //  if FEH is checked
//     else if(feh.checked){
//         //call out the tof func and store it in a new var
//         let resultf = toF(temp)

//         //display answer on the docum
//         ans.textContent = resultf

//     }
//     // if nothing is checked
//     else{
//         alert("INPUT A NUMBER, DAMNIT!!")
//     }
// }


// //takes a variabel and covert it to ceilius
// function toC(temp) {
//     return (temp - 32) * 5 / 9 + "°C"
// }

// // takes a variabel and covert it to Fahrenheit
// function toF(temp){
//     return (temp * 9 / 5) + 32 + "F"
// }






//ARRAY

// let fruits = []

// fruits[0] = "apple"
// fruits[2] = "orange"
// fruits[1] = "banana"


// fruits.push("dragonfruit")

// fruits.unshift("mango")
// // for (let i = fruits.length - 1; i > 0; i--){
// //     console.log(fruits[i])
// // }

// for(fruit of fruits){
//     console.log(fruit)
// }



// // console.log(fruits[fruits.length - 1])




// let person = {
//     names: "Lexy", age: 23
// }

// function hello() {
//     return "hello_world"
// }


// let fruits = []

// fruits[0] = hello()
// fruits[2] = person
// fruits[1] = cars

// console.log(fruits)

// let fruits = ["apple", "oranges", "banana"]
// let cars = ["tesila", "toyota", "lambo", "bnw"]
// let anime = ["AOT", "MHA", "LD"]

// let group = [fruits, cars, anime]
// group[2][2] = "Lala's Daries"

// for(let i of group){
//     for(let j of i){
//         console.log(j)
//     }
// }
// cars = cars.sort().reverse()

// for(let car of cars){
//     console.log(car)
// }

// let num = [1, 2, 3, 4, 5, 6]

// function max(){
//     let num1 = Math.max(...num)
//     return `number: ${num1}`
// }

// console.log(max())

// let num = [1, 2, 3, 4, 5, 6]
// let num2 = [7, 8, 9, 10, 11, 12]

// num.push(...num2)
// console.log(...num)


// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// console.log(sum(a, b, c, d))

// function sum(...numbers){
//     let total = 0;
//     for(num of numbers){
//         total += num
//     }
//     return total
// }





// function sum(x, y, console1, display){
//     let result = x + y
//     console1(result)
//     display(result)
// }
// function console1(output){
//     console.log(output)
// }
// function display(output){
//     let label = document.querySelector("label")
//     label.textContent = output
// }

// sum(5, 6, console1, display)


// let num = [0, 1, 2, 3, 4, 5]

// // (element, index array)
// // a function displaing for each element of the array 

// function print(element){
//     console.log(element)
// }

// function cube(element){
//     return Math.pow(element, 5)
// }

// let cubic = num.map(cube)

// cubic.forEach(print)


// let ages = [3, 6, 17, 24, 57, 72]


// let age = ages.filter(checkAge)
// age.forEach(print)
// function checkAge(element){
//     return element >= 18;
// }
// function print(element){
//     console.log(element)
// }
// let a = [0, 7, 6, 8]
// a

// let ages = [3, 6, 17, 24, 57, 72]
// let total = ages.reduce(sumAge)

// function sumAge(total, element){
//     return total + element
// }
// a
// console.log(`Sum Of Their Age: ${total} years`)

// let age = [9, 1, 4, 7]

// age = age.sort((a, b) => {return b-a})


// // function descending(x, y){
// //     return y - x
// // }
// age.forEach(print)

// function print(element){
//     console.log(element)
// }

// let shopcart = new Map([
//     ["toys", 34],
//     ["phone", 50],
//     ["lolipop", 12],
//     ["jacket", 42]
// ]);

// let total = 0
// for(x of shopcart.values()){
//     total += x
    
// }
// console.log(total)


// function print(element){
//     console.log(element)
// }

// // function total(value){
// //     let result = 0
// //     result += value
// //     console.log(result)
// // }

// // let r = total.reduce(total1)
// // console.log(r)




// let num = [1, 2, 3, 4, 6]

// // use .forach to display it
// num.forEach(print)

// function print(element){
//     console.log(element)
// }

// //space
// console.log(" ")

// // use .map to double the valuse of each element
// let doubled = num.map(double)

// // to display the doubld array
// doubled.forEach(print)

// function double(element){
//     return element * 2
// }

// //space
// console.log(" ")

// // use .filter to create a new list of multipies of 2 from the old list
// let notOdd = num.filter(even)
// // to display only list of multipies of 2 
// notOdd.forEach(print)

// function even(element){
//     if(element % 2 == 0){
//         return element
//     }
// }

// //space
// console.log(" ")

// // use .reduce to sum up the element in old list
// let sum = num.reduce(add)
// console.log(sum)

// let total = 0
// function add(total, element){
//     total += element
//     return total
// }

// let fams = new Map([
//     ["Lexy", 17],
//     ["Ixy", 16],
//     ["B.boy", 12],
//     ["Ricky", 10]
// ])

// // let price = 0
// // price += fams.get("lexy")
// // fams.set("Anny", 40)
// // fams.set("Dad", 48)
// // fams.set("Lexy", 24)
// // fams.set("Baby", 0)
// // fams.delete("Baby")
// // console.log(fams.has("Lexy"))
// // console.log(fams.size)

// fams.forEach((value, key) => {
//      console.log(`${key} is ${value} years old`)
    
// })



// let total = 0

// for (let x of fams.values()) {
//     total += x
// }
// console.log("total age in this family is : " + total + " years")

// let myshop = new Map([
//     ["legs", 350],
//     ["eyes", 200],
//     ["brain", 900],
//     ["teeth", 500]
// ])

// // to add or change a new or old key value pair
// myshop.set("fingers", 700)

// // to get the value of a key using the key
// let spent = 0
// spent += myshop.get("legs")
// spent += myshop.get("teeth")
// console.log("$" + spent)

// // to delete a pair using it key
// myshop.delete("eyes")

// // to get how many items in your map
// console.log(myshop.size)

// // to check if a pair is in the map usin the key
// console.log(myshop.has("eyes"))

// // to print out the map using a foreach
// myshop.forEach((value, key) => {
//     console.log(`The ${key} costs $${value}`)
// })



// //OBJECT

// let car1 = {
//     model: "toyota",
//     color: "yellow",
//     year: 2023,

//     drive: function(){
//         console.log(`you are driving a ${this.model}...`)
//     },
//     stop: function () {
//         console.log("you just hit the breaks...")
//     }
// }

// let car2 = {
//     model: "Lambogini",
//     color: "blue",
//     year: "2025",
    
//     drive: function () {
//         console.log(`you are driving a ${this.model}..`)
//     },
//     stop: function () {
//         console.log("you just hit the breaks...")
//     }
// }

// console.log(car2.model)
// console.log(car2.color)
// console.log(car2.year)
// car2.drive()
// car2.stop()

// CLASS

// class Player {
//     score = 0;
//     pause(){
//         console.log(`you have paused the game`)
//     }
//     stop() {
//         console.log(`you have stopped the game`)
//     }
//     play(){
//         console.log("Playing time..")
//     }
// }

// let player1 = new Player();

// player1.play()
// player1.pause()

// player1.score += 1
// console.log(player1.score)


class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    info(){
        console.log(`Name is ${this.name}, ${this.age} years old, i got ${this.gpa} GPA`)
    }
    study(){
        console.log(`${this.name} is studing so SHHH...`)
    }
}

let student1 = new Student("Lexy", 17, 2.2)
// student1.name = 
// student1.age = 
// student1.gpa = 
student1.info()
student1.study()

console.log(" ")

let student2 = new Student()
student2.name = "Ixy"
student2.age = 16
student2.gpa = 3.8
student2.info()
student2.study()
