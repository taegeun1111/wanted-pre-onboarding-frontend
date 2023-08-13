import React, {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {TokenContextObj, TokenContext} from "./TokenContext";

const TOKEN_KEY = 'accessToken';

const TokenProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const navigation = useNavigate();
  const getToken = localStorage.getItem(TOKEN_KEY);

  // 첫 렌더링 시 toekn값 구분해서 redirect
  useEffect(() => {
    if (getToken === null) {
      navigation('/signin');
    } else {
      navigation('/todo');
    }
  }, [getToken])

  const saveToken = (token: string) => {
    console.log("saveToken")
    // if (token) {
    localStorage.setItem(TOKEN_KEY, token);
    navigation('/todo');
    // }
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    // navigation('/signin');
  };

  const TokenContextValue : TokenContextObj = {
    getToken,
    saveToken,
    removeToken
  }

  return (
    <TokenContext.Provider value={TokenContextValue}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;