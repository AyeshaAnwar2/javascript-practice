
// //    we can use .style to set and get the single property of thh code
let firstclass = document.getElementById('1para')

// it will change its color when clicked
function changecolor(){
    let firstclass = document.getElementById('1para')
    firstclass.style.backgroundColor = "pink";
    firstclass.style.Color = "yellow";
}

firstclass.addEventListener('click' , changecolor)


// //    style.cssText is used to get or set t he multiple porperties at a time like background color,color,margin etc
let para2 = document.getElementById('2para')
para2.style.cssText = "background-color:red; color:white; padding:0.2rem";


// //    .setAttribute is used to set the attributes like class name or set the margins etc
let firstd = document.getElementById('fdiv')
firstd.setAttribute("color", "orange");


// //    .className is used to add or fetch multiple classes

// //    .classlist is used to add, remove, toggle or constain the whole classes
function addclass(){
    para2.classList.add("highlight");
//     // same we can use remove or toggle aslo
 }


//                             EVENTS

/* events (we can say that it is action which happen on our clicks , our click is called evnet , on wich
we click is called event target and what happen after the click is called action or behaviour )
 actions are written in the event listner

 syntax:       <event-target>.addEventListner (<event type> , <function ,action>)
*/



function checkchange(){
    let heading = document.getElementById('events');
    heading.textContent = " happy birthday fakiha"
 }

let heading = document.getElementById('events');

heading.addEventListener('click' , checkchange);
// heading.removeEventListener('click' , checkchange)


/* phases of events

1: capturing phase is the phasse to reach at the target place for example inside the parent element
2: At range phaes is the phase when you finally reach at the target
3: bubbling phase is the phase to go back to the parent
*/


// add alert para to whole div

function alertpara(event){

    // condition when to use alert element
    if(event.target.nodeName === 'SPAN')
    alert("you have clicked on para  " + event.target.textContent)
}

let mydiv = document.getElementById("wrapper");
mydiv.addEventListener('click' , alertpara)