/* eventloop is type a loop whichh run in the case of asyncronous code means which doest not run line by line
 it take some time to load and process 
 name used as setTimeout , setInterval , fetch, promise.then , async/await, event listner etc

 main components are call stack , browser , callback queu, event loop
 call stack where code runs one functiion at a time
 browser which handle the asyncrounus code
 callback queu hold complete astcn tasks waiting to be pushed into the call stack
 event loop check is the call stack empty then it pushed the next callback from queu into the call stack


 syntax :  setTimeout(() =>{
    console.log("Async");
    }, 1000);
 */



// promises is the object which handle the returnig value and completion of asyncrouns code
// syntax : let firstpromise = new promise((resolve, reject) =>{
// ......function............})

let firstpromise = new Promise((resolve , reject) =>{

    setTimeout(function saymyName(){
    console.log("my name is Ayesha Anwar");
}, 15000);
   resolve("fulfilled")
})

// then and catch are used in promise if its true
// use then when resolve , catch when rejected

let mypromise = new Promise((resolve , reject)=>{
  let success =true ;
  if (success)(
    resolve("promise fulfilled")
  )
  else{
    reject("pormise rejected")
  }
});

mypromise.then((message)=>{
    console.log("message of then" +message);
})
mypromise.catch((error)=>{
    console.log("Error:" +error);
})


// we can use promise.all to print multiple promise
let promise1 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 1000 , "first");
})

let promise2 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 2000 , "second");
})

let promise3 = new Promise((resolve , reject)=>{
    setTimeout(resolve , 3000 , "third");
})

Promise.all([promise1 , promise2 , promise3])
.then((values)=>{
    console.log(values)
})