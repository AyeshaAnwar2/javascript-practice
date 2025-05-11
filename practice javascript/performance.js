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