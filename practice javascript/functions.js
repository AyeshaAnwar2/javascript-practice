let num=10;
console.log(num);

function myname(){
    console.log("Ayesha");
}
myname();


function printcounting(){
    for(let i=1; i<=50; i++){
        console.log(i);
    }
}

printcounting();

function concatination(firstName , lastName){
     let fulName=  firstName + " " + lastName;
       return fulName;
}

let fulName = concatination("Ayesha", "Anwar");
console.log("Ful Name=" ,fulName);




function avgNum(num1 , num2){
    let average= (num1 + num2)/2;
     return average;
}

let average = avgNum(4 , 6);
console.log("average:" , average);




function getsum(a,b,c){
    let sum = a+b+c;
     return sum;
}

let sum = getsum(2,4,4);
console.log(sum);


//function expression
let getmultiplication = function( a, b){
    return a*b;
}

let ans = getmultiplication(2,20);
console.log(ans);


//for power multiplication exponent
let squarNum = function(num){
     let answer= num**2;
    return answer;
}
let answer = squarNum(4);
console.log(answer);


function getExp(x,y){
    let ans2= x**y;
    return ans2;
}

console.log(getExp(2,3));


//arrow function
let students = (x,y) =>{
    let ans1 = x**y;
    return ans1;
}

console.log(students(3,9));


let cgp = 3;
console.log(cgp);

let namee = "Ayesha";
console.log(namee);