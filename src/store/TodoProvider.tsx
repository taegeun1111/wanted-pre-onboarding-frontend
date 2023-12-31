import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { TodoContextObj, TodoContext } from './TodoContext';
import { TokenContext } from './TokenContext';
import Todo from '../models/TodoData';
import {
  creatTodo as creatTodoApi,
  deleteTodo as deleteTodoApi,
  getTodos as getTodosApi,
  updateTodo as updateTodoApi,
} from '../apis/todo';
import axios from 'axios';

const TodoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { getToken } = useContext(TokenContext);
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      if (getToken) {
        const data = await getTodosApi(getToken);
        setTodos(data);
      }
    } catch (error) {
      alert(error);
    }
  };

  // 초기 렌더링 시 list 받아오기
  useEffect(() => {
    if (getToken) {
      const fetchData = async () => {
        try {
          await fetchTodos();
        } catch (error) {
          if (axios.isAxiosError(error)) {
            let message;
            if (error.response) {
              const errorMessage = error.response.data.message;
              message = errorMessage;
            } else {
              message = error.message;
            }
            throw new Error(message);
          }
        }
      };

      fetchData();
    }
  }, [getToken]);

  const createTodo = async (text: string) => {
    if (getToken) {
      const textWithToken = { text, getToken };
      const result = await creatTodoApi(textWithToken);
      setTodos(prevState => [...prevState, result]);
    }
  };

  const deleteTodo = async (id: number) => {
    if (getToken) {
      await deleteTodoApi(id, getToken);
      await fetchTodos();
    }
  };

  const updateTodo = async (todo: Todo) => {
    if (getToken) {
      const updateData = {
        id: todo.id,
        todo: todo.todo,
        isCompleted: todo.isCompleted,
        token: getToken,
      };

      await updateTodoApi(updateData);
      await fetchTodos();
    }
  };

  const TodoContextValue: TodoContextObj = {
    todos,
    createTodo,
    deleteTodo,
    updateTodo,
  };

  return <TodoContext.Provider value={TodoContextValue}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
