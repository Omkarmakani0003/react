import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Item from './components/Item'
import { useSelector } from "react-redux"


function App() {
const todos = useSelector(state => state.todos)

  return (
    <>
       <div className="todo-app">
        <h1 className="title">Todo List</h1>
        <Form />
        <ul className="todo-list">

          {
            todos.map((todo)=>(
            <li className="todo-item" key={todo.id}>
              <Item todo={todo}/>
            </li>
          ))}
        
        </ul>
      </div>
    </>
  )
}

export default App
