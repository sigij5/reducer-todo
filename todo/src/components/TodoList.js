import React from 'react'
import {Todo} from './Todo'
import {TodoForm} from './TodoForm'


export function TodoList(props) {
    const {tasks, dispatch} = props


    return(
        <div className='todo-list'>
            {tasks.map(task => (
                <Todo key={task.id} task={task}  completed={task.completed} dispatch={dispatch} />
            ))}

            <TodoForm dispatch={dispatch}/>
        </div>
    )
}