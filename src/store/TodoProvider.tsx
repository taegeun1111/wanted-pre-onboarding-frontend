import React, {ReactNode, useContext, useEffect, useState} from "react";
import {TodoContextObj, TodoContext} from "./TodoContext";
import {TokenContext} from "./TokenContext";
import Todo from "../models/TodoData";
import {addNewTodo, getTodos} from "../apis/todo";
import {log} from "util";

const TodoProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const {getToken} = useContext(TokenContext);
  const [todos, setTodos] = useState<Todo[]>([])

  // 초기 렌더링 시 list 받아오기
  useEffect(() => {
    if (getToken !== null) {
      console.log("테스트")
      getTodos(getToken)
        .then((response) =>
          setTodos(response.data)
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
      const result = await addNewTodo(textWithToken);

      setTodos((prevState)=>[...prevState, result]);
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

export default TodoProvider;