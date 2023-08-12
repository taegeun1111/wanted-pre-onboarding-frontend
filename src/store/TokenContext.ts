import React from "react";

type TokenContextObj = {
  getToken: string | null;
  saveToken: (token: string) => void;
  removeToken : () => void;
}

const TokenContext = React.createContext<TokenContextObj>({
  getToken : null,
  saveToken : (token : string) => {},
  removeToken : () => {}
  }
)

export default TokenContext;