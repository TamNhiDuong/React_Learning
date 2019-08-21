import React from 'react';

const userInput = (props) => {
    const myStyle = {
        border: '2px solid red'
    }
return <input 
type="text" 
style={myStyle}
onChange={props.changed} 
value={props.currentName}/>;
};

export default userInput; 