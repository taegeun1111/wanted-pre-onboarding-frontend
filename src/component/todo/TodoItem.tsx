import React, {useContext, useRef, useState} from 'react';
import "../sass/todo/TodoItem.scss"
import {TodoContext} from "../../store/TodoContext";
import Todo from "../../models/TodoData";

const TodoItem: React.FC<{ todo: Todo }> = ({todo}) => {
  const [updateShow, setUpdateShow] = useState(false);
  const {deleteTodo, updateTodo} = useContext(TodoContext);
  const inputVal = useRef<HTMLInputElement>(null);

  const todoDeleteHandler = () => {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?")
    if (confirmDelete) {
      deleteTodo(todo.id)
    }
  }

  const checkedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({
      ...todo, isCompleted: e.target.checked
    })
  }

  const updateShowHandler = () => {
    setUpdateShow(!updateShow);
  }

  const handleUpdate = () =>{
    const updateText = inputVal.current!.value;
    if (updateText.trim().length > 0) {
      updateTodo({
        ...todo, todo: updateText
      })
      alert('수정이 완료되었습니다.')
      setUpdateShow(!updateShow);
    }else {
      alert('공백은 불가합니다.')
    }
  }

  const updateTodoHandler = () => {
    handleUpdate()
  }

  const keyUpHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleUpdate()
  }

  return (
    <li className="todo-list-wrapper">
      <div className="list-main-wrapper">
        <input
          type="checkbox"
          className="check-box"
          defaultChecked={todo.isCompleted}
          onChange={checkedHandler}
        />
        {!updateShow
          ?
          <h1 className="todo-text">
            {todo.todo}
          </h1>
          :
          <input
            className="modify-input-text"
            type="text"
            data-testid="modify-input"
            defaultValue={todo.todo}
            onKeyUp={keyUpHandler}
            ref={inputVal}
            autoFocus={true}
          />
        }

      </div>

      {/* 기존 list section */}
      {!updateShow &&
        <div className="list-edit-wrapper">
          <button
            type="button"
            className="modify-btn"
            data-testid="modify-button"
            onClick={updateShowHandler}
          >
            수정
          </button>

          <button
            type="button"
            className="delete-btn"
            data-testid="delete-button"
            onClick={todoDeleteHandler}
          >
            삭제
          </button>
        </div>
      }

      {/* 수정 list section */}
      {updateShow &&
        <div className="list-edit-wrapper">
          <button
            type="button"
            className="modify-btn"
            data-testid="submit-button"
            onClick={updateTodoHandler}
          >
            제출
          </button>

          <button
            type="button"
            className="delete-btn"
            data-testid="cancel-button"
            onClick={updateShowHandler}
          >
            취소
          </button>
        </div>
      }
    </li>
  );
};

export default TodoItem;