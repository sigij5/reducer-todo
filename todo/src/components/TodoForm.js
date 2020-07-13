import React, {useState} from 'react'


export const TodoForm = props => {
    const newTask = {
        item: '',
        completed: false,
        id: new Date(),
    };

    const {dispatch} = props
    const [taskToAdd, setTask] = useState(newTask)



    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'Add_Task', payload: taskToAdd})
        setTask({item:''})
    }

    const handleChanges = e => {
        setTask({
            item: e.target.value,
            completed: false,
            id: new Date(),
        })
    }

    const clearCompleted = e => {
        e.preventDefault();
        
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type='text'
                name='task'
                value={taskToAdd.item}
                onChange={handleChanges}
                />
            <button>Add</button>
            <button onClick={() =>dispatch({ type : 'Clear_tasks' })}>Clear Completed Tasks</button>
        </form>
    )
}