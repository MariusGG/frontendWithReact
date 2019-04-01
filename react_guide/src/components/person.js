import React from 'react';
import '../styles/person.css'

const Person = (props) => {
  return (
    <div className="person">
      <h1>Hi! My name is {props.name}</h1>
      <h2 onClick={props.changePerson2}>Occupation: {props.occupation}</h2>
      <input type="text" onChange={props.newName} value={props.name}/>
    </div>
  )
};
export default Person;
