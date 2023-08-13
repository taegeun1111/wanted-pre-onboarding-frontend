import React, {useContext, useRef} from 'react';
import '../sass/todo/NewTodoForm.scss'
import {BsPlusLg} from "react-icons/bs"
import {TodoContext} from "../../store/TodoContext";

const NewTodoForm = () => {
  const {createTodo} = useContext(TodoContext);
  const inputVal = useRef<HTMLInputElement>(null);
  const creatNewTodoHandler = () => {
    const text = inputVal.current!.value;
    createTodo(text);
  }

  return (
    <div className="new-todo-wrapper">
      <input
        className="new-todo-input"
        data-testid="new-todo-input"
        ref={inputVal}
      />

      <button
        className="new-todo-btn"
        data-testid="new-todo-add-button"
        onClick={creatNewTodoHandler}
      >
        <BsPlusLg/>
      </button>
    </div>
  );
};

export default NewTodoForm;