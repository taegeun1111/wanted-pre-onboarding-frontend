import React from 'react';
import TodoCount from "./TodoCount";
import "../sass/todo/Footer.scss"
import {MdLogout} from "react-icons/md"
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <TodoCount/>
      <div className="logout-btn">
        <div className="logout-text">로그아웃</div>
        <MdLogout className="logout-icon"/>
      </div>
    </section>
  );
};

export default Footer;