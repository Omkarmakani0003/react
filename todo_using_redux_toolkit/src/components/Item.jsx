import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updateTodo, removeTodo, complatedTodo } from "../features/todos/todoSlice"

function Item({todo}){

  const dispatch = useDispatch() 
  const [text, setText] = useState(todo.text) 
  const [editAllow, setEditAllow] = useState(false)

  const save = (id)=>{

    const todo = {
       id : id,
       text : text,
       complated : false
    }

    dispatch(updateTodo(todo))
    setEditAllow(false)
  
  }

  const remove = (id) =>{
    dispatch(removeTodo(id))
  }

  const complated = (id,value)=>{

    const todo = {
       id : id,
       text : text,
       complated : value
    }

    dispatch(complatedTodo(todo))
  
  }

    return (        
      <>
          <div className="left">
            <input type="checkbox" className="check" onChange={(e)=>{ complated(todo.id,!todo.complated) }} checked={todo.complated} />
            <input type="text" className="todo-input" value={ text } onChange={(e)=>{ setText(e.target.value) }} disabled={!editAllow} placeholder="Example task"/>
          </div>
                        
          <div className="actions">
              <button className="edit-btn" onClick={()=>{editAllow ? save(todo.id) : setEditAllow(!editAllow)}} >{editAllow ? 'Save' : 'Edit'}</button>
              <button className="delete-btn" onClick={()=>{remove(todo.id)}} >Delete</button>
          </div>
      </>
    )
}

export default Item