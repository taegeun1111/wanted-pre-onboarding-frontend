import Todo from "../models/TodoData";
import React from "react";

export type TodoContextObj = {
  todos : Todo[];
  addTodo : (text : string) => void;
  // removeTodo : (id : string) => void;
  // updateTodo : (id : string) => void;
}

export const TodoContext = React.createContext<TodoContextObj>({
  todos : [],
  addTodo : () => {},
  // removeTodo : () => {},
  // updateTodo : () => {}
})

