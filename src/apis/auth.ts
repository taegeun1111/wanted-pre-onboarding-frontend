import axios, {AxiosError} from 'axios';

type Param = { email: string; password: string };
type ResponseAuth = { accessToken: string };

const instance = axios.create({
  // baseURL: 'https://pre-onboarding-selection-task.shop/',
  baseURL: 'http://localhost:8000',
});


//로그인
export const signIn = async (userInfo: Param): Promise<ResponseAuth> => {
  try {
    const response = await instance.post('/auth/signin', userInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return {accessToken: response.data.access_token};
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
    } else {
      throw new Error("알 수 없는 에러 발생");
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


