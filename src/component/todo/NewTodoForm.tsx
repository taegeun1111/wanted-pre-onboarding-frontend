import React, {useContext, useRef} from 'react';
import '../sass/todo/NewTodoForm.scss'
import {BsPlusLg} from "react-icons/bs"
import {TodoContext} from "../../store/TodoContext";
import {TokenContext} from "../../store/TokenContext";

const NewTodoForm = () => {
  const {addTodo} = useContext(TodoContext);
  const inputVal = useRef<HTMLInputElement>(null);
  const {getToken} = useContext(TokenContext);
  const creatNewTodoHandler = () => {
    const text = inputVal.current!.value;
    // console.log(text)
    addTodo(text);
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