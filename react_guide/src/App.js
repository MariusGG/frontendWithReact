import React, { Component } from 'react';
import './App.css';
import Person from './components/person'

class App extends Component {
  state = {
    characters: [
      { name: "Homer", occupation: "Nuclear Engineer" },
      { name: "Peter", occupation: "Safety inspector" },
      { name: "Fred", occupation: "Crane operator" }
    ],
    showCharaters: false
  }
  handleOccupationChange = (newCharacter) => {
    this.setState({
      characters: [
        { name: newCharacter, occupation: "Crane operator" },
        { name: "Peter", occupation: "Nuclear Engineer" },
        { name: "Fred", occupation: "Safety inspector" }
      ]
    })
  }
  handleChangeInput = (event) => {
    this.setState({
      characters: [
        { name: "Homer", occupation: "Nuclear Engineer" },
        { name: event.target.value, occupation: "Safety inspector" },
        { name: "Fred", occupation: "Crane operator" }
      ]
    })
  }
 toggleCharacters = () => {
    const isDisplayed = this.state.showCharaters;
    this.setState({showCharaters: !isDisplayed});
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
        <Person name={ this.state.characters[0].name }
          occupation={this.state.characters[0].occupation}
          changePerson2={this.handleOccupationChange.bind(this,"Marius")}/>

        <Person name={ this.state.characters[1].name }
          occupation={this.state.characters[1].occupation}
          newName={this.handleChangeInput}/>

        <Person name={ this.state.characters[2].name }
          occupation={this.state.characters[2].occupation}/>
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
