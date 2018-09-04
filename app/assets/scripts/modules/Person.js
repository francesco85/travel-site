/*
es5
function Person(fullName, favCol){
    this.name = fullName;
    this.favColor = favCol;
    this.greet = function(){
      console.log('Hello, my name is '+ this.fullName +' and my favorite color is '+ this.favColor+'.');  
    };
        
}*/

/*es6*/


class Person{
    constructor(fullName,favCol){
        this.name = fullName;
        this.favColor = favCol;
    }
    greet(){
        
      console.log('Hello, my name is '+ this.fullName +' and my favorite color is '+ this.favColor+'.');
    }
}

//module è oggetto parete di oggetto exports
//exports è oggetto che verrà restituito quando facciamo require  e in questo caso diciamo che la proprietà dell'oggetto module è uguale al nostro costruttore..quindi al require verrà ritornato direttamente l'oggetto da cui potremo creare instanze!
//potremmo anche creare nuove proprietà o metodi di exports: exports.property oppure exports.myCustomMethod = function(){block instructions}
//module.exports = Person;

//es6
export default Person;