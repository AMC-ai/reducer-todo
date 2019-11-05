import React, { useReducer } from 'react';

export const todoItem = (props) => {

    return (
        <div className={`item ${props.item.completed ? 'completed' : ''}`}
            onClick={() =>
                props.dispatch({ type: 'toggle', payload: props.item })
            }>
            <div>{props.item.item}</div>
        </div>
    )

}