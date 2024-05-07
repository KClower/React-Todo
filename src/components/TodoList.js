import React from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js



const TodoList = props => {

    const { todos } = props

    return (
        <div>

            <ul>
                {todos.map(todo => {
                    return (
                        <Todo toggleTask={props.toggleTask} key={todo.id} todo={todo} />
                    )
                })}
            </ul>

        </div>

    )
}

export default TodoList;
