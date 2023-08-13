import React, {ReactNode, useContext, useEffect, useState} from "react";
import {TodoContextObj, TodoContext} from "./TodoContext";
import {TokenContext} from "./TokenContext";
import Todo from "../models/TodoData";
import {creatTodo, deleteTodo, getTodos} from "../apis/todo";

const TodoProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const {getToken} = useContext(TokenContext);
  const [todos, setTodos] = useState<Todo[]>([])

  // 초기 렌더링 시 list 받아오기
  useEffect(() => {
    if (getToken !== null) {
      getTodos(getToken)
        .then((response) =>
          setTodos(response)
        )
        .catch((error) => {
          alert(error)
        })
      console.log(`result 후 todos의 값 ${todos}`)
    }
  }, [getToken])

  useEffect(() => {
    console.log(`result 후 todos의 값 ${todos}`);
  }, [todos]);


  const addTodo = async (text: string) => {
    if (getToken !== null) {
      const textWithToken = {text, getToken};
      const result = await creatTodo(textWithToken);

      setTodos((prevState) => [...prevState, result]);
    }
  }

  const removeTodo = async (id: number) => {
    if (getToken !== null) {
      await deleteTodo(id, getToken)

      getTodos(getToken)
        .then((response) =>
          setTodos(response)
        )
        .catch((error) => {
          alert(error)
        })
    }
  }

  const TodoContextValue: TodoContextObj = {
    todos,
    addTodo,
    removeTodo,
  }

  return (
    <TodoContext.Provider value={TodoContextValue}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;