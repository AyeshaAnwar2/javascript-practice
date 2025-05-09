
//    we can use .style to set and get the single property of thh code
let firstclass = document.getElementById('1para')
firstclass.style.backgroundColor = "pink";


//    style.cssText is used to get or set t he multiple porperties at a time like background color,color,margin etc
let para2 = document.getElementById('2para')
para2.style.cssText = "background-color:red; color:white; padding:0.2rem";


//    .setAttribute is used to set the attributes like class name or set the margins etc
let firstd = document.getElementById('fdiv')
firstd.setAttribute("color", "orange");


//    .className is used to add or fetch multiple classes

//    .classlist is used to add, remove, toggle or constain the whole classes
function addclass(){
    para2.classList.add("highlight");
}
