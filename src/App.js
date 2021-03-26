import React, { Component } from 'react';
import './App.css'
import styled from 'styled-components'

import UserInput from './Userinput/UserInput';
import UserOutput from './Useroutput/UserOutput';
import Person from "./Person/Person";


class App extends Component {

    state = {
        persons : [
            {id: 'per1', name: 'MAX', age: 23},
            {id: 'per2', name: 'Ali', age: 24},
            {id: 'per3', name: 'AHMAD', age: 27}
        ],
        otherStates: 'Some other State',
        showPersons : false
    };

    //     nameChangeHandler = (event) => {
    //     this.setState({
    //         persons:[
    //
    //         ] event.target.value});
    // };

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons;
        persons.splice(personIndex,1);
        this.setState({persons: persons})
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    render(){

        const style = {
            backgroundColor: 'green',
            color: 'white',
            padding: '6px',
            border: '1px solid blue',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        };

        let persons = null;
        if(this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) =>{
                            return <Person
                                click={()=>this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}></Person>
                        })
                    }
                </div>
            );
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes= [];
        if (this.state.persons.length <=2) {
            classes.push('red');
        }
        if (this.state.persons.length <=1) {
            classes.push('bold');
        }
        return(
                <div className="App">
                    <ol>
                        <li>Create two user Components Input and Output</li>
                    </ol>
                    <p className={classes.join(' ')}> Listing Three Persons</p>
                    <UserInput changed={this.usernameChangeHandler}
                    currentName={this.state.username}/>
                    <button
                        style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
        );
    }
}

export default App;