import axios, {AxiosError, AxiosResponse} from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const url = 'https://www.pre-onboarding-selection-task.shop/'

const instance = axios.create({
  baseURL: url
})

type Param = { email: string, password: string }

//로그인
export const signIn = async (userInfo: Param): Promise<any> => {
  try {
    const response = await instance.post('/auth/signIn', userInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response)
    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      let message;
      if (error.response) {
        const errorMessage = error.response.data.message;
        message = errorMessage;
      } else {
        message = error.message;
      }
      throw new Error(message)
    }
  }
};


//회원가입
export const signUp = async (userInfo: Param): Promise<any> => {
  try {
    const response = await instance.post('/auth/signup', userInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      let message;
      if (error.response) {
        const errorMessage = error.response.data.message;
        message = errorMessage;
      } else {
        message = error.message;
      }
      throw new Error(message)
    }
  }
};
