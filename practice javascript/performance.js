/* performance is a way to check which code is 
running fastly and taking less time
it is calculated bby subtracting the both time taken 


// syntax: const t1 = performance.now()   =is written before starting the code
           const t2 = performance.now()    = is written on the last of the code 
           console.log +(t2-t1)
*/

const t1 = performance.now()

for(let i= 1 ; i<100; i++){
    let para = document.createElement('p')
    para.textContent = "it is para" +i;
    document.body.appendChild(para);
}

const t2 = performance.now()
console.log("total time by code is" +(t2-t1));


// code 2 by second method to check which code is much faster then the other

const t3 = performance.now()

let checkdiv = document.createElement('div')
for(let i=1; i<100; i++){
    let para = document.createElement('p')
    para.textContent = "it is changed para" +i;
    checkdiv.appendChild(para);
}
document.body.appendChild(checkdiv)

const t4 = performance.now()
console.log("total time = " +(t4-t3))


/*

we can see that our second code is runnig in less time it is because it has less reflow and repaint ti;me
reflow is the calculation of the whole process
repaint is jsut the displayin code result
reflow happen in every single line when we append it in the document body
so in the first code we append eveny single line to the document body wich take the more reflow and repaint so it take more time to relode
while in the second code we just append the whole code in the div first line by line then append the whole div in the document body in a single take 
which takes the less time

in short

less reflow and repaint = less time taken (fast loading)

*/




// best way
// document fragment which dont take no reflow no repaint but take 1 reflow and one retake when add to document

const t5 = performance.now()

let fragment = document.createDocumentFragment();
 
for (let i = 1; i<50; i++){
    let para = document.createElement('p')
    para.textContent = ("this is para" +i +"ab") 
    // no fragment no repaint
    fragment.appendChild(para);
}
// 1 reflow and 1 repaint
document.body.appendChild(fragment);
const t6 = performance.now()
console.log("check time" +(t6-t5));