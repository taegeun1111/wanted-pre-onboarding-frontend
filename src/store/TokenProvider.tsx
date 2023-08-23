import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContextObj, TokenContext } from './TokenContext';

const TOKEN_KEY = 'accessToken';

const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigation = useNavigate();
  const getToken = localStorage.getItem(TOKEN_KEY);

  const saveToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token);
    navigation('/todo');
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigation('/signin');
  };

  const isLogin = () => {
    const result = getToken !== null;
    return result;
  };

  const TokenContextValue: TokenContextObj = {
    getToken,
    saveToken,
    removeToken,
    isLogin,
  };

  return <TokenContext.Provider value={TokenContextValue}>{children}</TokenContext.Provider>;
};

export default TokenProvider;
