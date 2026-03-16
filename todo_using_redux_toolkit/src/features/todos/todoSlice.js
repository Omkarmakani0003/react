import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    'todos' : []
}

const todoSlice = createSlice({
    name : 'todo',
    initialState,

    reducers:{

        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
                complated : false
            } 
            state.todos.push(todo)
        },

        updateTodo : (state,action) => {
            const todo = state.todos.map((todo)=>( todo.id == action.payload.id ? action.payload : todo ))
            state.todos = todo
            
        },

        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> ( todo.id != action.payload ))
        }
    }
})

export const {listTodo, addTodo, updateTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer
