
// variaable hoistin is defind as if call fuction before declariotion and its defination then it wiil automaticaly
// move the declaration to the top of calling variabe but it only move the declaration not defination(value)
//  thats why it will show undefined
console.log(age);
var age = 19;

// in the state of function when we call before declaration and defination it will return the acurate answer
// it will shift the whole function to the top of calling
sayname();

function sayname(){
    console.log("ayesha")
}