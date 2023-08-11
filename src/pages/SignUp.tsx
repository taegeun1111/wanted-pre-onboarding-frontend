import React, {FormEvent} from 'react';
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import {Link} from "react-router-dom";
import "./sass/SignUp.scss"
const SignUp = () => {
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="signUp-Container">
      <h1 className="signUp-title">회원가입</h1>
      <form className="signUp-from" onSubmit={submitHandler}>
        {/*<EmailInput/>*/}
        {/*<PasswordInput/>*/}

        <div className="signUp-btn-wrapper">
          <button
            className="signUp-btn"
            type="submit"
            data-testid="signUp-button"
          >
            로그인
          </button>
          <Link to="/signin" className="link-btn">이미 회원이신가요?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;