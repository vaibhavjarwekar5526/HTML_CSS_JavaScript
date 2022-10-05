import React from 'react'

const Student = ({obj}) => {



    return (
        <div>
            <h1>Student Name: {obj.name}</h1>
            <h2>Age: {obj.age}</h2>
            <h2>Class: {obj.class}</h2>
        </div>
    )
}

export default Student
