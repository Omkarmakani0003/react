import { useState } from "react"
import { useTodo } from "../context/todoContext"

function Item({todo}){
   
    const {editTodo,deleteTodo,complated} = useTodo()
    const [editable,setEditable] = useState(true) 
    const [task,setTask] = useState(todo.todo)

    const edit = ()=>{
       setTask(todo.todo)
       setEditable(!editable)
    }
    const save = ()=>{
        if(!task) return
        editTodo(todo.id,{...todo,todo:task})
        setEditable(!editable)
    }

    return (
        <>
            <div className="left">
              <input type="checkbox" className="check" />
              <input type="text" className="todo-input" value={task} onChange={(e)=>{setTask(e.target.value)}} disabled={editable}/>
              {/* <span className="task">{todo.todo}</span> */}
            </div>

            <div className="actions">

              <button className="edit-btn" onClick={editable ? edit : save}>{editable ? 'Edit' : 'Save'}</button>
              <button className="delete-btn">Delete</button>
            </div>
        </>
    )
}

export default Item