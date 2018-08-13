import React from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends React.Component {

    buildListItems() {
        let items = [];
        for (let item of this.props.todos) {
            if (item.title && item.body) {
                items.push(<TodoListItem title={item.title} body={item.body} />)
            }
        }

        return items;
    }

    render() {
        return (
            <div className='todo-list'>
                {this.buildListItems()}
            </div>
        );
    }
}

export default TodoList;