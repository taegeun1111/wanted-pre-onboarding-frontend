import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {TokenContext} from "../store/TokenContext";

const PrivateRoute = () => {
  const { isLogin } = useContext(TokenContext);

  if (!isLogin()) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default PrivateRoute;
