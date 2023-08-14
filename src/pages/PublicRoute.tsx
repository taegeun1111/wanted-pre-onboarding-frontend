import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {TokenContext} from "../store/TokenContext";

const UnAuthorized = () => {
  const { isLogin } = useContext(TokenContext);

  if (isLogin()) return <Navigate to="/todo" />;

  return <Outlet />;
};

export default UnAuthorized;
