import React, { Component } from 'react';

class Course extends Component {
//only for testing
componentDidUpdate() {
    console.log(this.props); 
};

    render () {
        return (
            <div>  
             <p>You selected the Course with ID: {this.props.match.params.id}</p>
             <h1>{this.props.match.params.title}</h1>
            </div>
        );
    }
}

export default Course;