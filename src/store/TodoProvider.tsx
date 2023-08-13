import React, {ReactNode, useContext, useEffect, useState} from "react";
import {TodoContextObj, TodoContext} from "./TodoContext";
import {TokenContext} from "./TokenContext";
import Todo from "../models/TodoData";
import {addNewTodo, getTodos} from "../apis/todo";

const TodoProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const {getToken} = useContext(TokenContext);
  const [todos, setTodos] = useState<Todo[]>([])

  // 초기 렌더링 시 list 받아오기
  useEffect(() => {
    if (getToken !== null) {
      getTodos(getToken)
        .then((response) => console.log(response))
        .catch((error) => {
          alert(error)
        })
    }
  }, [getToken])

  const addTodo = async (text: string) => {
    if (getToken !== null) {
      const textWithToken = {text, getToken};
      const result = addNewTodo(textWithToken);

      console.log('result 추가한 후 : ',result)
    }
  }

  const TodoContextValue: TodoContextObj = {
    todos,
    addTodo,
  }

  return (
    <TodoContext.Provider value={TodoContextValue}>
      {children}
    </TodoContext.Provider>
  )
}