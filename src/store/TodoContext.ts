import Todo from "../models/TodoData";
import React from "react";

export type TodoContextObj = {
  todos : Todo[];
  createTodo : (text : string) => void;
  deleteTodo : (id : number) => void;
  updateTodo : (todo : Todo) => void;
}

export const TodoContext = React.createContext<TodoContextObj>({
  todos : [],
  createTodo : () => {},
  deleteTodo : () => {},
  updateTodo : () => {}
})

