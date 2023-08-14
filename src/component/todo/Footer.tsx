import React, {useContext} from 'react';
import TodoCount from "./TodoCount";
import "../sass/todo/Footer.scss"
import {MdLogout} from "react-icons/md"
import {TokenContext} from "../../store/TokenContext";
const Footer = () => {
  const {removeToken} = useContext(TokenContext);
  const logoutHandler = () =>{
    removeToken()
  }

  return (
    <section className="footer-wrapper">
      <TodoCount/>
      <div
        className="logout-btn"
        onClick={logoutHandler}
      >
        <div className="logout-text">로그아웃</div>
        <MdLogout className="logout-icon"/>
      </div>
    </section>
  );
};

export default Footer;