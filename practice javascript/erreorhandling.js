/*
   the code, thing which disturb the normal flow of run is called error
   error are of two types compile time error and run time error
    compile error ocur before the execution the code and run time occur during running the program
*/


// error handling is the process that how you handdle the error to handle error we use try catch and finally block
/* compile time error

console.log(1;    */

// runtime error
// console.log(data);


// try catch finally

try{
    console.log(data)
}
catch(error){
    throw new Error("first declare then run")
    console.log("catch block starts")
    console.log("your error is " ,error)
}
finally{
    console.log("it will definetely run no matter error occur or not")
}

// throw your error

let errorcode = 100;
if (errorcode = 100){
    throw new Errorrr("invalid json")
}