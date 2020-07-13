import React from 'react'


export const Todo = props => {
    const {task, completed, dispatch} = props

    return(
        <div  
        style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        onClick={() => dispatch({ type: 'Toggle_completed', payload: task.id})} >
            <p>{task.item}</p>
        </div>
    )
}