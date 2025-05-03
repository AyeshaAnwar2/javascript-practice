
// variaable hoistin is defind as if call fuction before declariotion and its defination then it wiil automaticaly
// move the declaration to the top of calling variabe but it only move the declaration not defination(value)
//  thats why it will show undefined
console.log(age);
var age = 19;

// (function hoisting)in the state of function when we call before declaration and defination it will return the acurate answer
// it will shift the whole function to the top of calling
sayname();

function sayname(){
    console.log("ayesha")
}


// stack store the data in the form LIFO (last in first out)
/*
    why function is called the first class citizen because:
        assign to variable
         pass as an argument
         return functin
         use function in data structure (as an array)
         as property
*/


// assign functin to variable(function expression)
let greet = function(){
    console.log("greeting and blessings");
}
greet()


// how to passs function

function hello(){
    console.log("hello ayesha");
    salam();
}

function salam(){
    console.log("salam to all")
}
hello();


// how to return functon
function solve(){
    return function (number){
        return number*number;
    }
}
    let ansto = solve();
    let finalans = ansto(10);
    console.log(finalans);

    // store function in data structure(in array)
    const array = [
        function (a,b){
            return a + b;
        },
        function (a,b){
            return a - b;
        },
         function (a,b){
            return a*b;
         }
    ];
    let firstans = array[0];
    let arrayans = firstans(3,6);
    console.log(arrayans);

    let secondans = array[1];
    let arrayans2 = secondans(3,6);
    console.log(arrayans2);

    let thirdans = array[2];
    let arrayans3 = thirdans(3,6);
    console.log(arrayans3);