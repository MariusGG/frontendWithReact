//--------------------------------------//
//------  REACT HOOKS (useState)  ------//
//--------------------------------------//


//REACT hooks have the "use..." something to allow us to have functionality to functional components
//Like the "useState" allows us to have state mangament like class bassed componenrts "state and setState"


import React, { useState } from 'react';
import Person from './person';
/*
We will look at "React hooks" is optional and is used for functional component
React hooks i just a collection of functions exposed by React which is used for functional React components.
the comoponent below is a functional component
in a functional component you don't have a render methond ad  you would just return JSX
in functional components you wont use import "Component" from React but instead will have "useState"
"useState" is an important React hook this allows us to manage state in a functional comopnent
"useState()" is called like a normal function
you would pass in your intial state in the parenthesise

---   We can have functions within functions like below as JAvscripts allows that
now we have a functional component that can manage state and that has other function which handle events
*/
  const App = (props) => {
    const [personState, setPersonState] = useState({  //this is array destructuring which we learned before
      person: [                          // this allow us to pull the elements from the right into two new variables
        name: "Marius",
        age: 32
      ],
      OtherThings: "I'm different"
    });

    const hanleChange = () => {
// by calling this "setPersonState" we are replace the oringal and we dont get "OtherThings: "I'm different""
// As its not being used in the handle change
// which in class basssed comopnents is different, it would store everything property
//so to make sure the new changes has the other properties or functions, you would need to add it manually
      setPersonState({
        person: [
          name: "Ellie",
          age: 35
        ],
        OtherThings: personState.OtherThings //this to access this property in the update
      })
    }

      return(
        <div>
          <h1>React Functional component</h1>
          <Person name={personState.person.name} />
          <button onClick={hanleChange}>Change Person</button>

        </div>
      )

  } export defaulf App;

/*
"useState" returns an array of two element: and always two elements no matter whats homany objects it contains
1st:  the first element will always be our current state, the current values as they are
      so if you want to show an element before making any changes to it we have access the the current state

2nd: the second elememnt will be a function which will alow us to update the current state.
  React will be aware of the sceond element and will rerender the component just as this.setState does

so like above we have personState as 1st element and setPersonState as 2nd element

      YOU COULD HAVE MULTIPLE "useState" HOOKS FOR DIFFERENT STATE SLICES
            SO WHEN CHANGES ARE MADE SOME STATES ARENT LEFT BEHIND
                                  IN THE OLD STATE
*/
