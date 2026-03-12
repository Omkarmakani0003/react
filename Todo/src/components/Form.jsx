import { useState } from "react"
import { useTodo } from "../context/todoContext"

function Form(){
const [todo, setTodo] = useState('')
const {addTodo} = useTodo()
  
const submitTodo = ()=>{
   addTodo({ id: Date.now(), todo: todo, complated: false})
   setTodo('')
}

return (
    <div className="todo-input-section">
      <input
        type="text"
        placeholder="Add new task..."
        className="todo-input"
        value={todo}
        onChange={(e)=>{setTodo(e.target.value)}}
      />
      <button className="add-btn" onClick={submitTodo}>Add</button>
    </div>
  )
}

export default Form