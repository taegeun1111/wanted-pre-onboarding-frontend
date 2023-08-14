import React, {FormEvent, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./sass/auth/SignUp.scss"
import {validateEmail, validatePassword} from "../component/auth/validation";
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import {signUp} from "../apis/auth";

const SignUp = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  // 입력값 검증
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const validateEnable = emailValidation.result && passwordValidation.result;

  const submitHandler = (e: FormEvent) => {
    const userInfo = {email: email, password: password}

    e.preventDefault();
    signUp(userInfo)
      .then(() => {
        alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.")
        navigation('/signin')
      })
      .catch((error) => {
        alert(error)
      })

  };

  return (
    <div className="signUp-Container">
      <h1 className="signUp-title">회원가입</h1>
      <form className="signUp-from" onSubmit={submitHandler}>
        <EmailInput
          onValueChange={setEmail}
          validationResult={emailValidation}
        />
        <PasswordInput
          onValueChange={setPassword}
          validationResult={passwordValidation}
        />

        <div className="signUp-btn-wrapper">
          <button
            className={validateEnable ? 'signUp-activate-btn' : 'disable'}
            type="submit"
            data-testid="signup-button"
            disabled={!validateEnable}
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