import React from "react";


const Todo = props => {

    const { todo } = props

    return (

        <li onClick={() => props.toggleTask(props.todo.id)}
            className={` ${props.todo.completed ? "todo completed" : "todo"}`} key={todo.id}>
            {todo.task}
        </li>

    )
}


export default Todo;