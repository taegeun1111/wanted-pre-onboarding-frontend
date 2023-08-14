import React, {useContext, useRef} from 'react';
import '../sass/todo/NewTodoForm.scss'
import {BsPlusLg} from "react-icons/bs"
import {TodoContext} from "../../store/TodoContext";

const NewTodoForm = () => {
  const {createTodo} = useContext(TodoContext);
  const inputVal = useRef<HTMLInputElement>(null);

  const handleCreate = () => {
    const text = inputVal.current!.value;
    if (text.trim().length > 0){
      createTodo(text);
      inputVal.current!.value = ''
    }else {
      alert('공백은 등록이 불가합니다!')
    }
  }

  const creatNewTodoHandler = () => {
    handleCreate()
  }

  const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleCreate()
  }

  return (
    <div className="new-todo-wrapper">
      <input
        className="new-todo-input"
        data-testid="new-todo-input"
        ref={inputVal}
        placeholder="입력 후 우측 버튼이나 엔터키를 눌려주세요!"
        onKeyUp={keyUpHandler}
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