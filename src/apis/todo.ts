import {instance} from "./index";
import axios from "axios";
import Todo from "../models/TodoData";
import {types} from "sass";
import Null = types.Null;

type Param = { text: string, getToken: string }

export const creatTodo = async (textWithToken: Param): Promise<Todo> => {
  console.log(`text : ${textWithToken.text}`)

  try {
    const response = await instance.post('/todos', {todo: textWithToken.text}, {
      headers: {
        Authorization: `Bearer ${textWithToken.getToken}`,
        'Content-Type': 'application/json',
      },
    })
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      let message;
      if (error.response) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      throw new Error(message);
    } else {
      throw new Error("알 수 없는 에러 발생");
    }
  }
};


export const getTodos = async (token: string) : Promise<Todo[]> => {
  try {
    const response = await instance.get('/todos', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      let message;
      if (error.response) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      throw new Error(message);
    } else {
      throw new Error("알 수 없는 에러 발생");
    }
  }
};

export const deleteTodo = async (id: number, token:string): Promise<void> => {
  try {
    const response = await instance.delete(`/todos/${id}`,{
      headers : {
        Authorization: `Bearer ${token}`
      }
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      let message;
      if (error.response) {
        message = error.response.data.message;
      } else {
        message = error.message;
      }
      throw new Error(message);
    } else {
      throw new Error("알 수 없는 에러 발생");
    }
  }
}