import React, {FormEvent} from 'react';
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import "./sass/SignIn.scss"
import {Link} from "react-router-dom";

const SignIn = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="signIn-Container">
      <h1 className="signIn-title">로그인</h1>
      <form className="signIn-from" onSubmit={submitHandler}>
        <EmailInput/>
        <PasswordInput/>

        <div className="signIn-btn-wrapper">
          <button
            className="signIn-btn"
            type="submit"
            data-testid="signin-button"
          >
            로그인
          </button>
          <Link to="/signup" className="link-btn">회원이 아니신가요?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;