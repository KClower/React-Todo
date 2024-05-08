import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./components/Todo.css";



const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  addTodo = (taskName) => {
    const newTodo = {
      task: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  toggleTask = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        else {
          return todo;
        }
      })
    })
  }

  clearTask = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.completed === false)
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="header">
          <h1>Todo List!</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask}
        />
        <div>
          <button onClick={this.clearTask} className='clear-btn'>Clear Completed</button>
        </div>
      </div>

    );
  }
}

export default App;
