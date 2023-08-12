import React, {ReactNode} from "react";
import {useNavigate} from "react-router-dom";
import TokenContext from "./TokenContext";

const TOKEN_KEY = 'accessToken';

const TokenProvider: React.FC<{ children: ReactNode }> = ({children}) => {
  const navigation = useNavigate();
  const getToken = localStorage.getItem(TOKEN_KEY);

  const saveToken = (token: string) => {
    if (getToken) {
      localStorage.setItem(TOKEN_KEY, token); // Fix this line
      navigation('/todo');
    }
  };

  const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigation('/signin');
  };

  return (
    <TokenContext.Provider value={{getToken, saveToken, removeToken}}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;