import React from 'react';
import plus from './plus.png'
import './TodoInput.css';

class TodoInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value  = event.target.value;
        const name   = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.handleSubmit(this.state.title, this.state.body);
        this.setState({title: "", body: ""})
    }

    render() {
        return (
            <div className="todo-input">
                <div className="title-row">
                    <p>Title</p>
                    <input 
                        name="title"
                        value={this.state.title}
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="body-row">
                    <p>Body</p>
                    <input
                        name="body"
                        value={this.state.body}
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="submit-row">
                    <img src={plus}  alt="Add todo" onClick={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default TodoInput;