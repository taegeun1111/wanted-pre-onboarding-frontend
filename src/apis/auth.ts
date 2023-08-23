import axios from 'axios';
import { instance } from './index';

type Param = { email: string; password: string };
type ResponseAuth = { accessToken: string };

//로그인
export const signIn = async (userInfo: Param): Promise<ResponseAuth | undefined> => {
  try {
    const response = await instance.post('/auth/signin', userInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      return { accessToken: response.data.access_token };
    }
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
      throw new Error('알 수 없는 에러 발생');
    }
  }
};

//회원가입
export const signUp = async (userInfo: Param): Promise<void> => {
  try {
    await instance.post('/auth/signup', userInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
