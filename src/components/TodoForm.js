import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: "",
        };
    }

    changeHandler = (e) => {
        this.setState({
            todo: e.target.value
        });
    };


    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="task"
                    value={this.state.todo}
                    onChange={this.changeHandler}
                />
                <button>ADD</button>

            </form>
        );
    }
}





export default TodoForm;