import React, {useContext} from 'react';
import TodoCount from "./TodoCount";
import "../sass/todo/Footer.scss"
import {MdLogout} from "react-icons/md"
import {TokenContext} from "../../store/TokenContext";
const Footer = () => {
  const {removeToken} = useContext(TokenContext);
  const logoutHandler = () =>{
    const confirmLogout = window.confirm("정말 로그아웃 하시겠습니까?")
    if (confirmLogout){
      removeToken()
    }

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