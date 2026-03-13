import { useState } from "react"
import { useTodo } from "../context/todoContext"

function Item({todo}){
   
    const {editTodo,deleteTodo,complated} = useTodo()
    const [editable,setEditable] = useState(true) 
    const [task,setTask] = useState(todo.todo)

    const edit = ()=>{
       if(todo.complated) return
       setTask(todo.todo)
       setEditable(!editable)
    }
    const save = ()=>{
        if(!task || todo.complated) return
        editTodo(todo.id,{...todo,todo:task})
        setEditable(!editable)
    }

    const remove = ()=>{
        deleteTodo(todo.id)
    }

    const check = ()=>{
        console.log(todo.id)
        complated(todo.id)
    }

    return (
        <>
            <div className="left">
              <input type="checkbox" className="check" onChange={check} checked={todo.complated}/>
              <input type="text" className="todo-input" value={task} onChange={(e)=>{setTask(e.target.value)}} disabled={editable}/>
            </div>

            <div className="actions">

              <button className="edit-btn" onClick={editable ? edit : save}>{editable ? 'Edit' : 'Save'}</button>
              <button className="delete-btn" onClick={remove}>Delete</button>
            </div>
        </>
    )
}

export default Item