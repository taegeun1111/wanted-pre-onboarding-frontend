import React from 'react';
import Header from "../component/todo/Header";
import Todos from "../component/todo/Todos";
import TodoProvider from "../store/TodoProvider";
import "./sass/todo/Todo.scss"
import Footer from "../component/todo/Footer";

const Todo = () => {
  return (
    <TodoProvider>
      <main className="todo-container">
        {/* AddTodo, Count */}
        <Header/>

        {/* TodoList */}
        <Todos/>
        <Footer />
      </main>
    </TodoProvider>
  );
};

export default Todo;