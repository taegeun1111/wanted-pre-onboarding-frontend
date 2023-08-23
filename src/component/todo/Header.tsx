import React from 'react';
import NewTodoForm from './NewTodoForm';
import '../sass/todo/Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title">TODO LIST</h1>

      <NewTodoForm />
    </header>
  );
};

export default Header;
