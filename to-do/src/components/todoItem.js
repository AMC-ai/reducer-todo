import React from 'react';

const TodoItem = (props) => {
    return (
        <div
            className={`item ${props.item.completed ? 'completed' : '' }`}
            style={{ textDecoration: props.item.completed ? "line-through" : "" }}
            onClick={() => 
                props.dispatch({ type: 'TOGGLE', payload: props.item })}>

        <h3>{props.item.item}</h3>
        </div>
    )
}

export default TodoItem; 