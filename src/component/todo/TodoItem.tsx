import React from 'react';
import Todo from "../../models/TodoData";

const TodoItem: React.FC<{ todo: string }> = ({todo}) => {
  return (
    <li className="todo-list-wrapper">

      {/* 텍스트 영역 */}
      <div className="list-main-wrapper">
        <input type="checkbox" className="check-box"/>
        <div className="todo-text">{todo}</div>
      </div>


      {/* 수정 삭제 영역 */}
      <div className="list-edit-wrapper">
        <button
          className="modify-btn"
          data-testid="modify-button"
        >
          수정
        </button>

        <button
          className="delete-btn"
          data-testid="delete-button"
        >
          수정
        </button>
      </div>
    </li>
  );
};

export default TodoItem;