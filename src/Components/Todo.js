import React from 'react';
import axios from 'axios';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }

        this.retrieveTodos = this.retrieveTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount() {
        this.retrieveTodos()
    }

    addTodo(title, body) {
        console.log(title, body);
        axios.post('https://nameless-temple-65108.herokuapp.com/todo', {
            "title": title,
            "body": body
        })
        .then(response => this.retrieveTodos())
        .catch(error => console.error("Unablee to add todo: " + error));
    }

    retrieveTodos() {
        axios.get('https://nameless-temple-65108.herokuapp.com/')
        .then(response => this.setState({todos: response.data.todos}))
        .catch(error => console.error("Unable to pull navigation " + error));
    }

    render() {
        if (this.state.hasError) {
            return (<h1>Something went wrong</h1>);
        }

        return (
            <div className='todo'>
                <TodoInput handleSubmit={this.addTodo} />
                <TodoList todos={this.state.todos} />
            </div>
        );
    }
}

export default Todo;