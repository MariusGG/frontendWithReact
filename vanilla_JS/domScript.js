
const newLine = document.getElementById('clickME').innerHTML = "This is my paragraph";
// const mainContent = document.querySelector("#main-ccontainer").innerHTML = "Hello World!";

// mainContent;
newLine;
const newSection = document.getElementById('new-section').innerHTML = "I'm a new section";
newSection;

let newH1 = document.createElement('h1');
let newText = document.createTextNode('Hi, this is a new text');
newH1.appendChild(newText)
const aside = document.querySelector('aside');
aside.appendChild(newH1);

let changeMe = () => {
  document.querySelector('main').innerHTML = "changed inner  html";
}


let changeName = () => {
  let e = document.querySelector('.newName');
  e.innerHTML = "Hello Ellie";
}

let changeEllie = document.getElementById('newEllie')
  changeEllie.addEventListener('click', function(){
  document.getElementById("newEllie").innerHTML = "Hello Marius";
});

let changeH2 = document.getElementsByTagName('h2')
changeH2[1].innerHTML = "Manipulating an emtpy H2 in JS"

let createSection = document.createElement('section');
document.body.appendChild(createSection);
let createH3 = document.createElement('h3');
createSection.appendChild(createH3);
let h3Content = document.createTextNode("this H3 was create and appended in JS");
createH3.appendChild(h3Content);

createSection.style.backgroundColor = "grey";
createSection.style.margin = "20px 100px";

const targetH4 = document.querySelector('h4');
targetH4.innerHTML = "My new H4";
targetH4.style.color = "blue";
targetH4.style.margin = "auto 20%";

const h5 = document.createElement('h5');
document.body.appendChild(h5);
let h5Text = document.createTextNode("this is my h5 text");
h5.appendChild(h5Text);
h5.style.backgroundColor = "yellow";

h5.setAttribute("class", "myH5-class");
const getelment = document.getElementsByTagName('h5');

h5.addEventListener('click', function newh5() {
  let x = document.querySelector('h5');
  x.style.color = "green";
});

function myFunction(event) {
  var x = event.target;
  document.getElementById("hits").innerHTML = "Triggered by a " + x.innerHTML + " element";
}

// let m = document.querySelector('input');
// m.addEventListener('input', function(){
//   let e = document.getElementById('newInput').value;
//   var a = document.getElementById('input-output').innerHTML = "Your input: " + e;
//
// })

  document.getElementById("event-listeners").addEventListener("transitionend", myFunction2);

  function myFunction2(event) {
    this.innerHTML = "CSS Property used: " + event.propertyName;
  }


// let m = document.querySelector('input');
// document.getElementById("demo").innerHTML = "You are searching for: " + m.value;

let getFirstH1 = document.querySelector('h1')
let appendingH1 = getFirstH1.innerHTML.replace(/Welcome/i, "Hello");
getFirstH1.innerHTML = appendingH1;

/*----------------------------------------------------*/
/*---   count-letters-in-a-string/javascript.   -----*/
/*--------------------------------------------------*/

charcterCount = (text) => {
  let characters = text.split('')
  let count = {}

  for (var i = 0; i < characters.length; i++) {
    if (count[characters[i]] === undefined )
     count[characters[i]] = 0;
    	count[characters[i]]++;

	}
for( let i in count){
	console.log(i + " = " + count[i]);
};
}

// EXAMPLE 2

charcterCount2 = (text) => {
  let characters = text.toLowerCase().split('')
  let count = {}

  for (var i = 0; i < characters.length; i++) {
    if (count[characters[i]] === undefined )
     count[characters[i]] = 0;
    	count[characters[i]]++;

	}
  for (const prop in count) {
  console.log(`${prop} = ${count[prop]}`);
}

}

getValue = () => {
  let arr = []
  let getInput = document.getElementById('newInput').value.match(/\D+/g).join("");
  let returnInput = document.getElementById('demo2');
  returnInput.innerHTML = getInput;
}


storeAndSort = (input) => {
  let newInput = null
  for (var i = 0; i < input.length; i++) {

    if(typeof input[i] === "sting"){
      newInput.push(input[i]);
    };
    return newInput;
  }
}

/*----------------------------------------------------*/
/*---   STORING DATA INTO AN ARRAY              -----*/
/*--------------------------------------------------*/

let myArr = []
pushData = () => {
  let inputText = document.getElementById('section2Id').value;
  myArr.push(inputText);
  let newString = "";

  for (var i = 0; i < myArr.length; i++) {
    newString += myArr[i] + "<br>";
  }
  document.getElementById('show-me').innerHTML = newString;
}


let newAsideH1 = document.createElement('h1');
let settingH1 = document.createTextNode("Hi i'm new here");
newAsideH1.appendChild(settingH1);
let divBlock = document.querySelector(".blocking").appendChild(newAsideH1);
divBlock.style.backgroundColor = "orange";
divBlock.style.margin = "10% auto";
divBlock.style.padding = "50px 0px";
