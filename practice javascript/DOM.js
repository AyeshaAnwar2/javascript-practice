let mychild = document.querySelector('#mychild');

let newelement1 = document.createElement('h1');
newelement1.textContent = "add this befor starting the div"

mychild.insertAdjacentElement('beforebegin' , newelement1)


let parent = document.querySelector('#mychild');
let child = document.querySelector('#fpara');
// parent.removeChild(child);

