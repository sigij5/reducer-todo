import React, {useState , useReducer} from 'react';
import './App.css';
import {TodoList} from './components/TodoList'
import { reducer, initialValues} from './reducers/reducer'





function App() {
  const [state, dispatch] = useReducer(reducer, initialValues)
  console.log(state)


  return (
    <div className="App">
      <h1>My Todo List</h1>

      <TodoList tasks={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
