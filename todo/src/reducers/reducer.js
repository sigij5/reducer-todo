import React from 'react'


export const initialValues = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Clean Room',
        completed: false,
        id: 3892987590
    },

]

export const reducer = (state, action) => {
    switch(action.type) {
        case 'Add_Task':
            return [
                ...state, action.payload
            ];
        case 'Toggle_completed':
            return state.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
                    )
        case 'Clear_tasks':
            const incomplete = state.filter(task => task.completed === false);
            return incomplete;
        default:
            return state;
    }
};