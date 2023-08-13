import React from 'react';
import "../sass/todo/TodoItem.scss"
const TodoItem: React.FC<{ todo: string }> = ({todo}) => {
  return (
    <li className="todo-list-wrapper">

      {/* 텍스트 영역 */}
      <div className="list-main-wrapper">
        <input type="checkbox" className="check-box"/>
        <h1 className="todo-text">{todo}</h1>
      </div>


      {/* 수정 삭제 영역 */}
      <div className="list-edit-wrapper">
        <button
          type="button"
          className="modify-btn"
          data-testid="modify-button"
        >
          수정
        </button>

        <button
          type="button"
          className="delete-btn"
          data-testid="delete-button"
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;