/* eventloop is type a loop whichh run in the case of asyncronous code means which doest not run line by line
 it take some time to load and process 
 name used as setTimeout , setInterval , fetch, promise.then , async/await, event listner etc

 main components are call stack , browser , callback queu, event loop
 call stack where code runs one functiion at a time
 browser which handle the asyncrounus code
 callback queu hold complete astcn tasks waiting to be pushed into the call stack
 event loop check is the call stack empty then it pushed the next callback from queu into the call stack

 */



