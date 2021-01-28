import React from 'react';

import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
             <p> Username: {props.userName}</p>
             <p> hope it gets overwritten !</p>

        </div>)

};

export default UserOutput;