/*----------------------------------*/
/*-------   LET & CONST      -------*/
/*----------------------------------*/

//  These are different ways for creating variables like "var" which also creates a variable
//  The new new ES6 syntax for creating variable are "let" and "const"

var language = "Javascript"
//  "Let" is like the new var, use it for variable values. A variable that the value can change depending on sceniors
// name variable could change depending on whos signed into an apllication
 let name = "Marius"
//  use const if the value will always be constant and you only assign once the value in this variable will never change
//  an example of this could be used in a game when a palyer starts like: const HP = 1
 const color = "Black"

// so if I try to reassign the const variable of color, I should the get an error TypeError: assignment to constat variable
// the best way around this is to assign the const value to another variable which isn't a const and then you can chage that value


/*----------------------------------*/
/*------   ARROW FUNCTIONS   -------*/
/*----------------------------------*/

//  original functions look like this:
  function myOldFunction() {
    return ...
  }

//  New ES7 arrow functions look like this:
  var myNewFunction = () => {
    return ...
  }
  //  with the new arrow function there are no more issures with the this keyword
  //  when you use the "this keyword in an arrow function it is implying the current function"
  // when you use "this" in the arrow function it will always keep its context and not change it on RunTime
  more examples:

    function myOldFunc(name) {
      console.log(name);
    }
    myOldFunc("Marius");

    const newFunc = (name, age) => {
      console.log(name, age);
    }
    newFunc("Ellie", 35)

    const multiply = number => number * 2;
    // this is a shorthand if you have no other line of code, then put it in one line without the return keyword also


    /*----------------------------------*/
    /*--- EXPORTS & IMPORTS(modules) ---*/
    /*----------------------------------*/

// person.js
  const person() {
    name: "Marius"
  }
  export default person;
//  this export uses the default keyword to export,
//  This means when we import we can name it how ever we like "import Ryan from './person' "

//  another file wher we export multiple things
//  toolbox.js
  export const hammer = () => {
    force: 6
  }
  export const drill = () => {
    force: 5
  }

//  In ther thrid file which will neeed to import all of the above files can look like this:
//  app.js
import Person from './person'
import James from './person'
import {hammer} from './toobox'
import {drill} from './toobox'

// when you export an object as "default" you can import it with any name
// and if we export directly from the const like above
// we would need to import explicitly byt the const name and we use { } for that
// becauce we didn't mark anything as a defualt in the toolbox.js
// aslo as we didn't point directly a defualt so we need to give it's direct name "{drill}"

//  DEFAULT EXPORT
 import person from './person' /*/or */ import newPerson from './person'

 // NAMED EXPORT ( commonly used version to export named exports )
 import { hamer } from './toolbox' /* OR */
 //you can assign an alias name from the original name like
 import { newHammer as hammer } from './toolbox'
  // choose a new name as the old name
  /* OR if you have multiple export names in one file you can import them all at once: */
  import * as bundled from './toolbox'
  //  bundled exposes all JS consts or what ever thats exports in the other file

  /*----------------------------------*/
  /*----------   CLASSES   -----------*/
  /*----------------------------------*/
/*
--  constructor in a class is to say these are the features this class comes with by DEFAULT

--  the class has properties which are...firstName, lastName and Age
--  the class can also have methods, this one has a fullName
*/

  class Human {
    constructor() {
      this.gender: null
    }
    myGender() {
      console.log(this.gener);
    }
  }

  class Person extends Human {
    constructor() {
      super() // must be called when ever using extends and calling "Constructor" in child class
      this.firstName: null,
      this.lastName: null,
      this.age: null,
      }
      fullName() {
        console.log(this.firstName + " " + this.lastName)
    }
/*
-- CLASSES can also inherite from a parent class
-- by using the "EXTENDS" keyword we are say inherite everything from human class
-- IN order to use the parent classes methods we will need to call the "super()" in the child class
-- the keyword "supper()" exercutes the parent class so you can use its methods
-- you can override a property in the child class to change the result of a method as this won't effect the parnet property
-- classes are just blue prints for javascript objects
-- clases are also used in React to create components
*/

/*----------------------------------*/
/*-- CLASSES/PROPERTIES/METHODS  ---*/
/*----------------------------------*/

//  properties are like "variables" attached to classes/objects
//  methods are like "functions" attached to classes/objects

//  ES6 to writie property

   constructor() {
     this.myProperty = "oldValue"
   }

//  ES7 to writie property
//  you can assign a property directly with a class as so:
  class Kitchen {
    table: true,
    overn: false,
    kettle: false
  }
// now in the ES7 syntax we skip the contrsuctor call but behind the senses its tranformed to use the contructor

//  ES6 to writie method
  myOldMethod() {
    doSomething...
  }

//  ES7 to writie Metods

  MyNewMethod = () => {

  }
//  by using the arrow function with are method we won't have any uses using the "this" keyword

//   EXAMPLE ES7:

  class House {
    door: null,
    rooms: null,
    balcony: null,

    howManyRooms = () => {
      console.log("The house has this many " + this.rooms +".");
    }
  }

  /*----------------------------------*/
  /*--   SPREAD & REST OPERATORS   ---*/
  /*----------------------------------*/

//   The spread operator is just " ... " three dots
//   the spread operator is used to split array elements or objects properties

let oldArr = [1,2,3]

let newarr = [...oldArr,4,5]
// spread allow you to add to old array and assign to a new array
// which will become a new array and not effect the original array

console.log(newarr) // [1, 2, 3, 4, 5]
// and without the spread operator you will get a result like so [[1, 2, 3], 4, 5]
// which would be a new array containing the old array

// WORKS WITH OBJECTS
let obj1 = {name1: "joe", name2: "bob" }

let obj2 = {...obj1, name3: "Marius"}

console.log(obj2) //Object { name1: "joe", name2: "bob", name3: "Marius" }


/*----------------------------------*/
/*-------     DESTRUCTORING  -------*/
/*----------------------------------*/

//  Destructoring is to easily extract array elements or object properties and store them in variables
//  it allows you to pull single elements and store them in a new array
//  unlike SPREAD it doesn't take the whole element and store it in a new order...NO!

//Example below of some DESTRUCTORING
[name,age] = ["Marius", 32]

console.log(name)
console.log(age)
//  its almost like creating an array but your just storing them individual to their own variables

//  Example for objects

let {name, age} = {name: "marius", age: 32}

console.log(name)
console.log(age)
// it storing the keys with its value individualy

/*----------------------------------*/
/*- REFERRENCES & PRIMITIVE TYPES  -*/
/*----------------------------------*/

let arr = [1,2,3,4]

let arr2 = [...arr]
arr.push(5)
console.log(arr2 + " hello")
console.log(arr)
arr.push(6)
arr3 = [...arr]
console.log(arr3)

// boolean, strings, intigers are all primitive types
// meaning when they are stored they are a copy and will not be changed if the old copy changes

// array and objects are referrence types
//  meaning they point to the original location, so if the object changes, this will effect the new objects
//  the way around that would be to use the SPREAD OPERATOR which will then store a new copy of the original
// and won't be changed once the old array/object has a change

/*----------------------------------*/
/*-------- ARRAY REFRESFER ---------*/
/*----------------------------------*/
let arr = [1,2,3,4]

let doubleArr = arr.map((num) => {
  return num * 2;
});
console.log(arr);
console.log(doubleArr);
