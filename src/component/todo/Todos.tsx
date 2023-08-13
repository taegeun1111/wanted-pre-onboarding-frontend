import React, {useContext} from 'react';
import {TodoContext} from "../../store/TodoContext";
import TodoItem from "./TodoItem";
import "../sass/todo/Todos.scss"
const Todos = () => {
  const {todos} = useContext(TodoContext);

  return (
    <ul className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
        />
      ))}
    </ul>
  );
};

export default Todos;