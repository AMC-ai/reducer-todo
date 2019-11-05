
import React, { useReducer, useState } from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';
import todoItem from './todoItem';


export const todoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [additionalItem, setAdditionalItem] = useState(
        {
            item: '',
            completed: false,
            id: Date.now()
        });
    //handle event
    const handleChanges = (e) => {
        setAdditionalItem({ ...additionalItem, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'addItem', playload: additionalItem });
        setAdditionalItem({
            item: '',
            completed: false,
            id: Date.now()
        })
    }

    return (
        <div className='todo-list'>
            <div>
                {state.map(item =>
                    <todoItem key={item.id} item={item} dispatch={dispatch} />
                )}
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='item'
                    placeholder='Add Item'
                    value={additionalItem.item}
                    onChange={(e) => handleChanges(e)} />
                <button>Add Item</button>
            </form>
            <button onClick={() => dispatch({ type: 'reset' })}>Clear Completed</button>
        </div>
    );
};

