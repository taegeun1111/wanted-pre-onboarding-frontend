import React, {FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./sass/SignUp.scss"
import {validateEmail, validatePassword} from "../component/auth/validation";
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import {signUp} from "../apis/auth";
import {Simulate} from "react-dom/test-utils";

const SignUp = () => {
  const navigation = useNavigate();
  const [email, setEmail] =useState('')
  const [password, setPassword] = useState('');
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);


  const submitHandler = (e: FormEvent) => {
    const userInfo = {email : email, password :password}

    e.preventDefault();
    signUp(userInfo)
      .then(()=>{
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")
        navigation('/signin')
      })
      .catch((error)=>{
        alert(error)
      })

  };

  return (
    <div className="signUp-Container">
      <h1 className="signUp-title">회원가입</h1>
      <form className="signUp-from" onSubmit={submitHandler}>
        <EmailInput
          onValueChange = {setEmail}
          validationResult = {emailValidation}
        />
        <PasswordInput
          onValueChange = {setPassword}
          validationResult = {passwordValidation}
        />

        <div className="signUp-btn-wrapper">
          <button
            className="signUp-btn"
            type="submit"
            data-testid="signUp-button"
            disabled={!emailValidation.result || !passwordValidation.result && true}
          >
            회원가입
          </button>
          <Link to="/signin" className="link-btn">이미 회원이신가요?</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;