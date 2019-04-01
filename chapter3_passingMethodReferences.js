//-----------------------------------------------------//
//--- Passing Method References between Components ---//
//---------------------------------------------------//
changeNameHandler = () => {
  this.setState({
    //change a state here
    // like the name of the persone can be updated
  })
}

we can pass a reference to a handler "setState" method as a property to a Component
like: <Person Click={this.changeNameHandler}/>
//above we are just referencing the handler function and calling it what ever we like
And now we can use the "click" property we have passed to the person component in app file
like: <h1 onClick={props.click}>Hello click Me!</h1>
// here we are say on click update the state
we call props because its the property we passed the person component in app file and now we can call it in person component as a props
so now we can exercute the handler in are person component also


we can passed down setState functions down to other components to update those components without having direct access to them.
So we are passing down handlers which will change data in the parent component

//-------------------------------------------//

We can also give the functions a value setState function:

changeNameHandler = (newName) => {
  this.setState({
    name: newName
  })
}
// how do we pass that data over to the person as a property to be used //

first_method:
<Person Click={this.changeNameHandler.bind(this,"Marius")}/>
<button onClick={this.changeNameHandler.bind(this,"ellie")}>clickMe</button>
// the "this" after bind is a lsit of arguments which is passed to the function "changeNameHandler"
// this refers to the "this" within the functions
// the secound arguments is the new change we are making

//THE NEW ALTERNATIVE IS:

<button onClick={() => this.changeNameHandler("Marius") }>clickMe</button>
// When using the the arrow function, it explicently adds a return keyword ahead of the function call
// so its an anonymous function which returns the "this.changeNameHandler()" function
// its not right to call "this" but this is an anonymous function which will be exercuted on a click
// which then returns the result of "this.changeNameHandler()" function

// this is a bit more readable then the other syntax and we can pass the data we want to change in the parenthesises
// i find this is easier to read and causes less confusion with bind
// but it can be inefficient depending on the size of your application


//-----------------------------------------------------//
//---          Adding Two Way Binding              ---//
//---------------------------------------------------//

this will allows us to change dynamicly, using the "onChange" event listener

handleTypeddName = (event) => {
  this.setState({
    name: event.target.value,
    age: ""
  })
}
// this will be passed to the person component
//  in app file as a property to be used in the Persons Componenet; like below

import React, from 'react';

const Person = (props) => {

  return(
    <div>
      <p>My name is {props.name} and I am {props.age}</p>
      <input type='text' onChange={props.handleTypeddName} value={props.name}/>
    </div>
  )
}
// this should now allow us to dynamically change the persons name and the event listener should be bound
// so the event extracts the input elements which is the target and the value in the input we enter

// so to see the current value of the name
// we set up a two way binding
// and we do this by stating "value={props.name}" which is the current name
// and our onChange methos listens for any dynamic event changed to update the name

// we can't just pass the value on its own without having so onchange event as we would get an error
// becuase we are binding the value to a property and not allowing it to event changes
// so the input gets locked and you won't be able to update the input.
