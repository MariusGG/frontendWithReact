import React, { Component } from 'react';
import './App.css';
import Person from './components/person'

class App extends Component {
  state = {
    characters: [
      { id: 1, name: "Homer", occupation: "Nuclear Engineer" },
      { id: 2, name: "Peter", occupation: "Safety inspector" },
      { id: 3, name: "Fred", occupation: "Crane operator" }
    ],
    showCharaters: false
  }

  handleChangeInput = (event, id ) => {
    const characterIndex = this.state.characters.findIndex(person => { // ".findindex()" will be just like map it will exercute a function on every element in an array
      return person.id === id;  //unlike .map() we return true or false   // here we have a function called person
    }); // we are saying if person (every iteration of objects in the array) if its equal to the id we recive for this function...and if so...Return TRUE
    // if true the "characterIndex" will hold the index of that character

    //SO now I can get the person by using the above ID
    const character = { ...this.state.characters[characterIndex] }; // using the spread operator to avoid mutating the original state
    // Creating a copy with the spread operator (more modern way ES6)
    // alternative is by doing ( const characters = Object.assign({}, this.characters[characterIndex]) ) older version

    //now to update the persons name
    character.name = event.target.value;

    //now to update the array from the above position "characterIndex"
    const characters = [...this.state.characters]; // getting the whole array of characters to edit the copy and not the original reference
    characters[characterIndex] = character; // now i can update by one position depending on the character index

    this.setState({ characters: characters }); // now its and updated array, which was a copy of the old array and with an updated the name of one character
  }

 toggleCharacters = () => {
    const isDisplayed = this.state.showCharaters;
    this.setState({showCharaters: !isDisplayed});
  }

  deleteCharacterHandler = (characterIndex) => {
    const characters = [...this.state.characters] // using spread so we are not refrencing to the original but its a copy
    characters.splice(characterIndex, 1);         // best practice is to use the spread operator
    this.setState({ characters: characters}) // always update state in an immuteable way... meaning without mutating the original state first
                                            // create a copy of the original, and change that and then update that with "setState"
  }

  render() {
    const btnStyle = {
      backgroundColor: "orange",
      border: "2px solid black",
      padding: "30px",
      width: "10%",
      cursor: "pointer"
    }

    let characters = null;
    if (this.state.showCharaters) {
      characters = (
        <div>
          { this.state.characters.map((character, arrayIndex) => {  // getting the array index so we can call this.deleteCharacterHandler
            return <Person
              name={character.name}
              occupation={character.occupation}
              clicked={this.deleteCharacterHandler.bind(this, arrayIndex)}
              key={character.id}
              newName={(event) => this.handleChangeInput(event, character.id)} /> // using the .bind method instead of an arrow function
            })}
        </div>
        );
      }

    return (
      <div className="App">
        <h1>Welcome to my React App! </h1>
        { characters }
        <button
          style={btnStyle}
          onClick={this.toggleCharacters}>Click Me!</button>
      </div>
    );
  }
}

export default App;
// the ".bind(this, )" method is prefered over the function call version above
// {() => this.this.handleOccupationChange("Marius")} a function that calls another function which passed an arg
// inline style like in the one in render method is good as its scoped to the current Component
// but you are limited to the full power of CSS here

// the ternary state which is a block is checking if that state is true display it (its current state is false)
// and if false display "null" this is almost like an if statement but React version
// A ternary expression is done with some condition and then a "?" to say what to do if True (which is anything after the "?")
// the we have else which is represented with ":" then do this...

//in the "toggleCharacters" function we store the original state in a variable
// and say setState of "showCharaters" is not what "isDisplayed" (which is false, so it becomes true now)
// is not is represented with the "!" so if "isDisplayed" is false the "showCharaters" becomes True... Vice Versa

// now we have shorten the code being returned by using a more dynamic javascript way
// by passing the characters as an empty variable then using tradition JS if statment to return the toggleCharacters
// then just passing the persons variable in the returned JSX
// bet way to out put content dynamically and recommended as best practice

// key is to give a unique identifier to React so it know each person component is different
// if this was data coming from an API you would have a unique ID
// its import to have a "key" when rendering a list of data and React will throw an error in the console
// react expects to this as a default as all data have a unique id to indentify themselves
// all elements rendering data must have a "key={}" property, helps react update the list effiecently
