import React, { Component } from 'react';

class Student2 extends Component {
    
    render() {
        return (
        <div>
            <h1>Student Name: {this.props.obj.name}</h1>
            <h2>Age: {this.props.obj.age}</h2>
            <h2>Class: {this.props.obj.class}</h2>
        </div>
        );
    }
}



export default Student2;
