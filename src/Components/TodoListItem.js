import React from 'react';
import './TodoListItem.css';

const TodoListItem = (props) => {
    return (
        <div className='todo-list-item'>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
}

export default TodoListItem;