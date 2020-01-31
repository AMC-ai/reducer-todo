export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn French',
        completed: false,
        id: 4892987589
    },
    {
        item: 'Clean Floors',
        completed: false,
        id: 5892987589
    },
];

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state,
            {
                item: action.payload.item,
                completed: false,
                id: Date.now()
            }];
        case 'TOGGLE':
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                }
                else {
                    return item;
                }
            })
        case 'CLEAR_COMPLETE':
            return state.filter((item) => !item.completed);
        default:
            return state;
    }
}