import React, {FormEvent, useState} from 'react';
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import "./sass/SignIn.scss"
import {Link} from "react-router-dom";
import {validateEmail, validatePassword} from "../component/auth/validation";

const SignIn = () => {
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('');
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("email의 값 : ",email)
    console.log("pw의 값 : ",password)
    console.log("Email validation : ",emailValidation)
    console.log("Password validation : ",passwordValidation)
  }

  return (
    <div className="signIn-Container">
      <h1 className="signIn-title">로그인</h1>
      <form className="signIn-from" onSubmit={submitHandler}>
        <EmailInput
          onValueChange = {setEmail}
          validationResult = {emailValidation}
        />
        <PasswordInput
          onValueChange = {setPassword}
          validationResult = {passwordValidation}
        />

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