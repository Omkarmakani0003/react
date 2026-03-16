import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todoSlice"

function Form(){
const dispatch = useDispatch()
const [text, setText] = useState('')

const save = ()=>{
  dispatch(addTodo(text))
  setText('')
}


return (
    <div className="todo-input-section">
      <input
        type="text"
        placeholder="Add new task..."
        className="todo-input"
        value={text}
        onChange={(e)=>{ setText(e.target.value) }}
      />
      <button className="add-btn" onClick={save}>Add</button>
    </div>
  )
}

export default Form