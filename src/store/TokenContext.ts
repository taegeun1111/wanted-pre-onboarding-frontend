import React from "react";

export type TokenContextObj = {
  getToken: string | null;
  saveToken: (token: string) => void;
  removeToken: () => void;
};

export const TokenContext = React.createContext<TokenContextObj>({
  getToken: null,
  saveToken: (token: string) => {},
  removeToken: () => {}
});

