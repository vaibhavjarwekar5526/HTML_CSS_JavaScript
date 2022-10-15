import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, deleteTodo, removeTodo} from '../actions/todoActions'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list)


    return (
        <>
            <figure>
                <figcaption>Add Your List Here </figcaption>
            </figure>

            <div>
                <input type="text" placeholder="Add Items .." 
                value={inputData}   
                onChange= {(e) => setInputData(e.target.value)}/>
                <button type="submit" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>Submit</button>
            </div>
            <div>
                {
                    list.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h3>{elem.data}</h3>
                                <button type="submit" onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <div><button onClick={() => dispatch(removeTodo())}>Check List</button></div>
        </>
    )
}

export default Todo
