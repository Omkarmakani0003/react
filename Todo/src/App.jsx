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
    
  }

  const complated = (id)=>{

  }
  // useEffect(()=>{
    
  // },[])

  return (
    <TodoProvider value={{todos,addTodo,editTodo,deleteTodo,complated}}>
      <div className="todo-app">
        <h1 className="title">Todo List</h1>
        <Form />
        <ul className="todo-list">
          {todos.map((todo)=>(
            <li className="todo-item" key={todo.id} >
              <Item todo={todo}/>
            </li>
          ))}
        
        </ul>
      </div>
    </TodoProvider>
  );
}

export default App;
