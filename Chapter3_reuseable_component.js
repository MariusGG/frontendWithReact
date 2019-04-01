function Person(props) {
return(
  <div className="person">
    <h1>{props.name}</h1>
    <p>Your Age: {props.age}</p>
   </div>
);
}
ReactDOM.render(<Person name="Max" age="23" />, document.querySelector(".r1"));
ReactDOM.render(<Person name="Sam" age="24" />, document.querySelector(".r2"));

// This is how you start by creating reusable react components
// ass you can see above we are using a function called Person
// and we are reusing its properties "props.name & props.age"
// by calling "props " we can reuse these and initialise them what anything
// With that we have managed to create two different people and placed them in divs in the HTML

/*-----------------------------/
/*-------BETTER WAY--------/
/*-----------------------------*/

var app = (
  <div>
    <Person name="Max" age="23" />
    <Person name="Sam" age="24" />
  </div>
);
ReactDOM.render(app, document.querySelector("#app"));

//this way allows us to not repeat the reactDOM call many times
// JSX elements are only allowed to have one root element thats why we have they are wrapped in the <div>
// now all i would have to do is comount the "app" variable in one ReacDOM.render  which will target our app div in the HTML
// that is done with the document.querySelector("#app")) call
// they should then stand side by side as they are now in one hook or one container
// Tis is the best preferred way to design React apps
// with this approach you can then produce single page web applications 
