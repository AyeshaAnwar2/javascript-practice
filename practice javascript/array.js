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

let yourname= 'ayesha'
console.log(yourname)
