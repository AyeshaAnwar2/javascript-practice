// by using asycn await we can run our asyncronous code like syncrounus


async function getdata(){
    setTimeout(function(){
    console.log("it is my asyncrounus function")
} , 2000)
}

getdata()



