      toggleCharacters = () => {
         const isDisplayed = this.state.showCharaters;
         this.setState({showCharaters: !isDisplayed});
       }

      {
        this.state.showCharaters ?
          <div>
          <Person name={ this.state.characters[0].name }
            occupation={this.state.characters[0].occupation}
            changePerson2={this.handleOccupationChange.bind(this,"Marius")}/>

          <Person name={ this.state.characters[1].name }
            occupation={this.state.characters[1].occupation}
            newName={this.handleChangeInput}/>

          <Person name={ this.state.characters[2].name }
            occupation={this.state.characters[2].occupation}/>
        </div> : null
      }

      <button
        style={btnStyle}
        onClick={this.toggleCharacters}>Click Me!</button>

// the ternary state which is a block is checking if that state is true display it (its current state is false)
// and if false display "null" this is almost like an if statement but React version
// A ternary expression is done with some condition and then a "?" to say what to do if True (which is anything after the "?")
// the we have else which is represented with ":" then do this...

//in the "toggleCharacters" function we store the original state in a variable
// and say setState of "showCharaters" is not what "isDisplayed" (which is false, so it becomes true now)
// is not is represented with the "!" so if "isDisplayed" is false the "showCharaters" becomes True... Vice Versa


/*--------------------------------------------------*/
/*------Javascript way to render DYNAMICALLY    ----*/
/*------        handing dynamic content          ---*/
/*--------------------------------------------------*/


//  As everything in React is JAvascript we can take advantage of this...

//  when ever react runs it exercutes everything in the render method
// meaning anything after render and within the return statement
// we can write normal javascript here as i'm not in the JSX
render(){

  let person = null;

  if (this.state.showCharaters) {
    persons = (
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
      { person }
      <button
        style={btnStyle}
        onClick={this.toggleCharacters}>Click Me!</button>
    </div>
  );
}
}
// So we are calling the person variable within the return stament now which its current state is null
//  Untill the click event happens
// this is simalr to the above but using Javascript outside the return statement
// As JSx doesn't allow to write pure javascript
//
