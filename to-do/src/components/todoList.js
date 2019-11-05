
import React, { useReducer, useState } from 'react';

import { todoReducer, initialState } from '../reducers/todoReducer';

const todoList = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
}