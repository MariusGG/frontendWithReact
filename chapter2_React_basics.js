// USING A BUILD WORKFLOW

/*  rRecommendations for building SPAs and MPAs */

// Why?
/*
--   Optimize code
--   Using Next-Gen Javascript features like ES6 syntaxs instead of ES5
--   Be more productive

//   How?

--   Use Dependency Manangement tools like NPM or YARN
--   Use BUNDLER recommended: Webpack
--   Use Compiler (Nex-Gen Javascript) Bale + presets
--   Use a Development Server ( local storage )

  ( ALL  OF THE ABOVE CAN BE ACHIEVED BY RUNING "creat-react-app" "name-of-application-here" )
                        "it can be installed with NPM "



--  You want to Render one root component to the dom which is given the id="root" in the index.HTML
--  And in the index.js we render the one root component here as :
        " ReactDOM.render(<App />, document.getElementById('root')); "

--  as this is the main application we can then nest all the other components with this main component


        " import React, { Component } from 'react'; "
    - this line helps us import two things here:
            -- React: this is responsible for rendering anything to the DOM
            -- And the Component Class its self
      (    WE IMPORT REACT SO WE DON'T HAVE TO WRITE "JSX" CODE   )
              "   read below to understand more about JSX "


    Example below:
                      import React, { Component } from 'react';
                      import './App.css';

                      class App extends Component {
                        render() {
                          return (
                            <div className="App">
                              <h1>Hello Marrius</h1>
                            </div>
                          );
                        }
                      }

                      export default App;

--   this class has one method which if the "render" method, which it need to render something to the screen
--   React needs the method "render " and all react components need some html to render to the screen
--   React need to "Render" or "return" some code which can be returned to the DOM
--   You can other thing within here like listen for events, calculations and reach out to the internet

--   the class finishes with " export default App; " this is because we are importing the whole file in our index.js
                  " import APP from './app' "

--   Its important to to know the the HTML within a react component isn't html
--   it is whats known as JSX, so we are writing what looks like HTML but its something different


--  Below is how JSX looks like:

    class NewApp extends Component {

    render() {

    return React.createElement('div', null, React.createElement('h1', null, "Hello I am the JSX version"))
    }
  };
  export default NewApp;

  // in plain jsx we need to create are div elements and our h1 elements
  // if you also notice the creation of H1 is done within the div creation
  // the null values are if we want to configure
  // React.createElement() take an infinit amout of arguments, so lots can be nested withing there
  // it can also render other components if they've been imported const INITIAL_STATE = {
  // the 2nd argument which is set as NULL can be passed as an object, this is where you can assign className or id's for CSS
  // The 3rd argument is where you pass whats nested inside the div, like regular HTML it can be another div
  // if another tag is nested inside the first element we would need to use "React.createElement()" again and beging a new block



-- Now this is the magic in React, the javascript React below:

    class NewAPP2 extends Component {
      render() {
        return (
        <div className='app'>
          <h1>I am the magic which looks like HTML, but really JSX</h1>
        </div>
        )
      }
    }
    export default NewAPP2;

// so the above code will be compiled into JSX which would look like this:
// Looks a lot long winded but good to understand that the above code isn't pure HTML

class NewAPP2 extends Component {
  render() {
    return React.createElement('div', {className: 'app'}, React.createElement('h1', null, "I am the magic which looks like HTML, but really JSX"))
  }
}
export default NewAPP2;


//--------------------------------------//
//---Stateless vs stateful Componenets--//
//--------------------------------------//

Every component recieves "props" and you can manage state in every components
// So even componets with a class keyword and a function component can now manage states

so managing state by calling:
 state = {

 };
 and using:
 randomHandleFunction = () => {
 this.setState({

 })
 }

 OR

  using the functiona useState hook to manage state:

  const [elementStaet, setelementState ] = useState ({

  })

            A STATEFUL component is a component which manages state,
whether its using the class based "state"  or functional state managing with "useState"
              -   these are called smart components or container components
              -   they contain the state of the application
              -
            A STATELESS component has no internal state managment, example is below:
              the example below is a stateless component as its doesnt manage any STATES
              Its great to create more stateless components because
                - they have no internal logic
                - they are considered as presentational components
                - as they only get external data and output it
                -
            import React, from 'react';

              const Person = (props) => {

              return (
                <div>
                  <h1>My name is {props.name} and I am {props.age} years old.</h1>
                </div>
              )
            };
            export default Person;

            it best practice to have fewer smart components because you have fewer places where the logic is happening
              its best to have more presentational containers depending on the size of the application.
        So have as many pure presentational components possible and only use state and a few components so the logic isn't all over the place. 
