import React, { Component } from 'react';
import './App.css';
import Person from './components/person'

class App extends Component {
  state = {
    characters: [
      { name: "Homer", occupation: "Nuclear Engineer" },
      { name: "Peter", occupation: "Safety inspector" },
      { name: "Fred", occupation: "Crane operator" }
    ]
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
  render() {
    const btnStyle = {
      backgroundColor: "orange",
      border: "2px solid black",
      padding: "30px",
      width: "10%",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>Welcome to my React App! </h1>
        <Person name={ this.state.characters[0].name }
          occupation={this.state.characters[0].occupation}
          changePerson2={()=> this.handleOccupationChange("Marius")}/>

        <Person name={ this.state.characters[1].name }
          occupation={this.state.characters[1].occupation}
          newName={this.handleChangeInput}/>

        <Person name={ this.state.characters[2].name }
          occupation={this.state.characters[2].occupation}/>

        <button
          style={btnStyle}
          onClick={this.handleOccupationChange.bind(this, "Homer")}>Click Me!</button>
      </div>
    );
  }
}

export default App;
// the ".bind(this, )" method is prefered over the function call version above
// inline style like in the one in render method is good as its scoped to the current Component
// but you are limited to the full power of CSS here
