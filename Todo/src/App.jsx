import { useEffect, useState } from "react";
import Form from "./components/Form";
import Item from "./components/Item";
import "./App.css";
import { TodoProvider } from "./context/todoContext";

function App() {

  const [todos, setTodo] = useState([])
  const addTodo = (todo)=>{
    setTodo((prev)=>[...prev, {...todo}])
  }

  const editTodo = (id,todo)=>{
     setTodo((prev)=> prev.map((prevTodo)=> ( prevTodo.id == id ? todo : prevTodo)))
  }
  const deleteTodo = (id)=>{
    setTodo((prev)=> prev.filter((prevTodo)=> ( prevTodo.id != id)))
  }

  const complated = (id)=>{ 
    console.log(id)
    setTodo((prev)=> prev.map((prevTodo)=> prevTodo.id == id ? {...prevTodo, 'complated': !prevTodo.complated } : prevTodo)) 
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos')) 
    if(todos && todos.length > 0){
      setTodo(todos)
    }
  },[])

  useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,complated}}>
      <div className="todo-app">
        <h1 className="title">Todo List</h1>
        <Form />
        <ul className="todo-list">

          {todos.map((todo)=>(
            <li className="todo-item" key={todo.id} style={todo.complated ? {background:'#6bd96b'}:{background:'#858585'}}>
              <Item todo={todo}/>
            </li>
          ))}
        
        </ul>
      </div>
    </TodoProvider>
  );
}

export default App;
