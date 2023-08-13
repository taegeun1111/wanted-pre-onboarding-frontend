import React from 'react';
import TodoCount from "./TodoCount";
import "../sass/todo/Footer.scss"
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <TodoCount/>
      <div className="logout-btn">로그아웃</div>
    </section>
  );
};

export default Footer;