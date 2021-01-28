//import React, { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{

// const app = props =>  {
//   const [personsState, setPersonsState] = useState({

state={  
persons: [
      { name: 'Ahmed', age: 28},
      { name: 'Ali', age: 25},
      { name: 'Asad', age: 24}
    ],

    otherStates:'some other value' 
  
}

// const [otherStates, setotherState] = useState({

//   otherStates:'some other value'
// });

//console.log(personsState,otherStates)

  switchNameHandler = (newName) =>{

   // console.log('Switch Name was Clicked!')

   //setPersonsState({
    this.setState({ 
    persons: [
      { name: 'Ahmed bilal', age: 28},
      { name: 'Ali Ahmed', age: 25},
      { name: 'Asad', age: 27}
     ]
  
   });

  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Ahmed bilal', age: 28},
        { name: event.target.value, age: 25},
        { name: 'Asad', age: 26}
       ]
    });
  }

  render () {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    }
  
  
    return(
      <div className="App">
        
          <h1 className="App-title">Welcome to React</h1>
          <p>This works really!</p>
          <button style={style}
          onClick={this.switchNameHandler}>Switch Names</button>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            click={this.switchNameHandler}>Filmaking is my hobby</Person>

          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            ></Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}
            ></Person>

      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Welcome to React!')) 
    } 
  }



export default App;
