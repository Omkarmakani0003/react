import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos : [
        {
            id:1,
            todo: 'task 1',
            complated : false
        }
    ],
    addTodo : (todo) => {},
    editTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    complated : (id) => {},

})

export const useTodo = ()=>{
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider

