// to understand array , start with object understanding
let obj = {
    name: "ayesha",
    weight: 25,
    age: 18,
}

console.log (obj);
console.log(typeof(obj))

// Arrays by using index number 
// index is the addrss in which our number is stored

let arr = [1,2,3,4,5];
console.log(arr[0]);

// built in function as shift , unshift, push, pop, slice, splice, map,filter , and may more


// push will add new word to array at end
// pop will remove the value
let brr = ['fiza' ,'hafsa' ,'tahira']
brr.push('ayesha');
console.log (brr);


// shift will remove first item
let crr = [1,2,3,4,5];
crr.shift();
console.log(crr);

// unshift will add new value to start of the array
let drr = [2,4,6,8]
drr.unshift('ayesha')
console.log(drr);

// slice will seprate the some part of array by giving index as parameter but it will exclude last index
//for example if want digit to 3 we have to give 4


let frr = [ 10,20,30,40,50,60];
console.log(frr);

console.log(frr.slice(2,4));


// /splice can change the data as if we want to delete previous values and add new values slice will splice will help


let irr = [100, 200,300,400,500,600]
irr.splice(1,0,'ayesha');
console.log(irr);


// map perfom the operation on our giving functin
let mrr= [ 10, 20,30,40]
// // mrr.map((number) => {
// //     console.log(number+1)
// }
// )

mrr.map((number,index) =>{
    console.log(number)
    console.log(index)
}
)

// filter is used to seprate the required numbeer

let num2=[2,3,4,8,9,11,16]
let evennum = num2.filter((number)=>{
    // we can use as condition also as
    // if (number%2==0){
    //     return true;
    // }
    // else{
    //     return false
    // }
    
    // we can write it other way without condition
    return number%2==0;
    // we can also use this filter acording to type
});
console.log(evennum);


// reduce use acccumulator and current variable to show signle answer of array
let nrr= [10, 20,,30,40]
let myanswer = nrr.reduce((acc, curr)=>{
     return acc + curr;
}, 0);
console.log(myanswer)


// sorting 

let set=[3,8,5,1,4]
set.sort();
console.log(set);

// sorting in decending order

set.sort()
set.reverse()
console.log(set)

// index is used to print the index of some value

let set2=[3,6,9,12,16,19,20]
let correctans = set2.indexOf(19);
console.log(set2)
console.log(correctans);


// for each is used to show the value,index etc of each number
// also find length

let score=[10,20,30,40,50]
let length = score.length;
console.log("length: " ,length);


score.forEach((num,index)=>{
    console.log("number: " ,num , "index: " , index);
})

// print array by using traditional loop

let tra=[2,3,4,5,6,7]
let lengthe = tra.length;
console.log("length: ", lengthe);


for(let index=0; index<=length; index++){
    console.log(tra[index])
}

// for in is used to print series like object with their values as well

let object ={

    name: "ayesha",
    table: 4,
    cgp: 3.25,

}

for(let series in object) {
    console.log(series, " ", object[series]);
}


// for of is used to itrate the array
let zrr=[1,2,3,4];
for (let value of zrr){
    console.log(value)
}

let fulname = "Ayesha"

for(let val of fulname){
    console.log(val);
}