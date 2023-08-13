import React from 'react';
import '../sass/todo/TodoCount.scss'
const TodoCount = () => {
  return (
    <section className="count-wrapper" >
        <div className="current-todo-title">완료된 TODO - </div>
        <div className="current-todo-count">3</div>
    </section>
  );
};

export default TodoCount;