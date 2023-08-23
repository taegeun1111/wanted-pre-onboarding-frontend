import React, { useContext, useEffect, useState } from 'react';
import '../sass/todo/TodoCount.scss';
import { TodoContext } from '../../store/TodoContext';
const TodoCount = () => {
  const { todos } = useContext(TodoContext);
  const [countTodo, setCountTodo] = useState(0);

  useEffect(() => {
    const filteredTodo = todos.filter(todo => todo.isCompleted);
    setCountTodo(filteredTodo.length);
  }, [todos]);

  return (
    <section className="count-wrapper">
      <div className="current-todo-title">완료된 TODO - </div>
      <div className="current-todo-count">{countTodo}</div>
    </section>
  );
};

export default TodoCount;
