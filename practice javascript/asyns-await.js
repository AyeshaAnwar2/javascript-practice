// by using asycn await we can run our asyncronous code like syncrounus


async function getdata(){
    setTimeout(function(){
    console.log("it is my asyncrounus function")
} , 2000)
}

getdata()

// async await function always return promise


// closure is combination of function and its required data (lexical scope)

function outerfunction(){
     let name = "Ayesha";

     function innerfunction(){
        console.log(name);
     }
        return innerfunction;
}
let inner = outerfunction();
inner();