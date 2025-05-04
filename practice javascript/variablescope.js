// global scope in which we can call variable from any place like in functin, in loops etc

let herage = 18;
console.log (herage);

{
    console.log(herage);
}

for(i=0; i<age; i++){
    console.log(herage);
}

function myage(){
    console.log("age=" , herage)
}
myage();



// function scope in which we can call the variable inside the function only
function sayhelloo(){
    let checkname = "check whether it will print when called outside the function";
    console.log("hello" , checkname);
}
// console.log(checkname); //it will not print the line because of function scope
sayhelloo()



// blockscope means we can call the function inside the block only but in block scope we can only use let 
// or const because var is not block scope

{
    var table   = "four legs";
}
console.log(table);


// let will not call the function outside
// {
//     let mychair = "chair has four legs"
// }
// console.log(mychair);

// const will also not call the function outside
// {
//     const odd = 3;
// }
//   console.log(odd);



//   temporal dead zone
/*
         tempooral dead zone means we can not access the value or variable before its declaration if it is 
         declared using let and const variable but if it is declared using var variable we can access the value
         the process to no access the variable is called temporal zone
  
*/
