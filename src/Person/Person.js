import React from 'react';

import './Person.css'
const person = (props) => {
   return (
   <div className="Person"><p onClick={props.click}>Iam a Person! My name is {props.name} and iam {props.age} years old</p>
   
   <p>{props.children}</p>
   
   </div>
   )
};

export default person;
