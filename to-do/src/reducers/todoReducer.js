// import React from 'react';

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];


export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'addItem':
            return [{
                ...state, item: action.payload.item,
                completed: false,
                id: Date.now()
            }];
        case "toggle":
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            })
        case "reset":
            return state.filter((item) => !item.completed);
        default:
            return state;
    }
};