import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    'todos' : JSON.parse(localStorage.getItem('todos')) || []
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
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },

        updateTodo : (state,action) => {
            const todo = state.todos.map((todo)=>( todo.id == action.payload.id ? action.payload : todo ))
            state.todos = todo
            localStorage.setItem('todos',JSON.stringify(state.todos))
            
        },

        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> ( todo.id != action.payload ))
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        
        complatedTodo : (state,action)=>{
            const todo = state.todos.map((todo)=>(todo.id == action.payload.id ? action.payload : todo ))
            state.todos = todo
            localStorage.setItem('todos',JSON.stringify(state.todos))
        }

    }
})


export const {listTodo, addTodo, updateTodo, removeTodo,complatedTodo} = todoSlice.actions;

export default todoSlice.reducer
