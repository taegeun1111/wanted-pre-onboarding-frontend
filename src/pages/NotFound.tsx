import React, { useContext } from 'react';
import './sass/NotFound.scss';
import { TokenContext } from '../store/TokenContext';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const { isLogin } = useContext(TokenContext);
  const navigation = useNavigate();
  const redirectHandler = () => {
    if (isLogin()) {
      navigation('/todo');
    } else {
      navigation('/signin');
    }
  };

  return (
    <section className="notFound-wrapper">
      <div className="notFound-title">404 ERROR</div>
      <button type="button" className="notFound-btn" onClick={redirectHandler}>
        메인 페이지로 이동하기
      </button>
    </section>
  );
};

export default NotFound;
