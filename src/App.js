import React, { Component } from 'react';
import './App.css'

import UserInput from './Userinput/UserInput';
import UserOutput from './Useroutput/UserOutput';

class App extends Component {

    state = {
        username: 'ahbilalkhan'
    }

    usernameChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render(){
        return(
            <div className="App">
                <ol>
                    <li>Create two user Components Input and Output</li>
                </ol>
                <UserInput changed={this.usernameChangeHandler}
                currentName={this.state.username}/>
                <UserOutput userName={this.state.username}/>
                <UserOutput userName="Bilal"/>
                <UserOutput userName="Khan"/>

                

            </div>
        )
    };
}

export default App;