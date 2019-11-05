

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
];


export const reducer = (state, action) => {
    switch (action.type) {
        case 'addItem':
            return [{
                ...state, item: action.payload.item,
                completed: false,
                id: Date.now()
            }];
        case "toggle":
            return { ...state, count: state.count - 1 };
        case "SET_NAME":
            return { ...state, name: action.payload };
        default:
            throw new Error("No action matched!");
    }
};