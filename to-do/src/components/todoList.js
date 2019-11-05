
import React, { useReducer, useState } from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';
import todoItem from './todoItem';


const todoList = () => {
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

}
