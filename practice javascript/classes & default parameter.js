class Human {

    // properties
    age;  //public
    weight = 30;  
    //if you want to display variable as private which can be used inside block only use # and acces usin
    // this.#variable name
    #color ="white";
    height = 5;



    // costructer is used when a variable is declared but not defined and to assign its value we use the 
    // the term constructur as we assign it for age 
     
    constructor(newage, newheight, newcolor){
        this.age = newage;
        this.height= newheight;
        this.#color = newcolor;
    }
    

   
   
    // functionalities

    walk(){
        console.log("human can walk" , this.#color)
    }

    run(){
        console.log("human can run")
    }

    
    // if you want to acces it outside use getter and setter method
    get fetchcolor(){
        return this.#color;
    }
      
    set modifycolor(val){
        this.#color = val
    }
}
let obj2 = new Human (100, 200, 300);
console.log(obj2.age);
console.log(obj2.height)
console.log(obj2.fetchcolor)
obj2.walk();


// default parameter
function solvenow(value = ["Ayesha", "hafsa" , "tahira" , 'fiza']){
    console.log("hello" ,value);
}
solvenow();


function saymyname(fname= "Ayesha" , lname= fname.toUpperCase()){
    console.log("my name is :", fname , " "  , lname)
}
saymyname()


// null or undefined
/*
  if we call function give value null it will print null
  but if we give undefined it will ignore it and show the default value
*/

function solveprblm(value = "ayesha"){
    console.log("value:" , value)
}
solveprblm(null);
solveprblm(undefined)


// as function

function ourage (){
    return 19;
}
function utililt(name ="ayesha" , age=  ourage()){
    console.log(name, " ", age)
}
utililt()
