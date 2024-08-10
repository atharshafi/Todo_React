import React from 'react'
import { createContext, useContext } from 'react'


export const Todocontext= createContext({

  todos:[
    {
      id:1,
      todo:"Message",
      todoStatus:false
    }
  ],
  addTodo: (todo)=>{},
  deleteTodo:(id)=>{},
  updateTodo:(id,todo)=>{},
  toggleComplete:(id)=>{}


})


export const useTodo=()=>{ 
  return useContext(Todocontext)
}

export const TodoProvider=Todocontext.Provider 