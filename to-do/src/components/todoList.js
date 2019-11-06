import React, { useReducer, useState } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import TodoItem from './TodoItem';

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [newItem, setNewItem] = useState(
        {
            item: '',
            completed: false,
            id: Date.now()
        });

    function handleChanges(e) {
        setNewItem({ ...newItem, [e.target.name]: e.target.value })
    }


    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        setNewItem(
            {
                item: '',
                completed: false,
                id: Date.now()
            }
        )
    }


    return (
        <div>
            <div>
                {state.map(item =>
                    <TodoItem key={item.id} item={item} dispatch={dispatch} />
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="item"
                    placeholder="Add New Item"
                    value={newItem.item}
                    onChange={(e) => handleChanges(e)} />
                <button>Submit</button>
            </form>
            <button onClick={() => dispatch({ type: 'CLEAR_COMPLETE' })}>Clear Completed</button>
        </div>
    )
};

export default TodoList; 