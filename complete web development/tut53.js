// console.log("This is tutorial 53");
// let name1 = "Harry";
// console.log(name1 + " is a good boy");



// function greet(name1,greettext){
//     let name2 = "name1";//local variable
//     console.log(name1 + " is a good boy\n"+greettext);
//     console.log("name"+" "+greettext)
// }
// let greettext = "Goodmorning";
// let name1 = "harshit"//global scope
// greet(name1,greettext);
// greet("harry",greettext);

function greet(name1,greettext="greetings from Javascript"){//used when argument is not passed(default argument)
    let name2 = "name1";//local variable
    console.log(name1 + " is a good boy\n"+greettext);
    console.log("name"+" "+greettext)
}
function sum(a,b,c){
    let d=a+b+c;
    return d;
    console.log("this is not executed")//anything below return is never executed
}
let greettext = "Goodmorning";
let name1 = "harshit"//global scope
greet(name1,greettext);
greet("harry");
//returning a value
let returnVal=greet("Rohan");
console.log(returnVal);//give undefined because function cannot return anything

let answer = sum(5,6,7);
console.log("sum is "+ answer);




//quiz take two numbers and return max,min ,greater ,lesser 