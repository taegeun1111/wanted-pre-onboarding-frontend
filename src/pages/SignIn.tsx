import React, {FormEvent, useContext, useState} from 'react';
import EmailInput from "../component/auth/EmailInput";
import PasswordInput from "../component/auth/PasswordInput";
import "./sass/auth/SignIn.scss"
import {Link} from "react-router-dom";
import {validateEmail, validatePassword} from "../component/auth/validation";
import {signIn} from "../apis/auth";
import {TokenContext} from "../store/TokenContext";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  //입력값 검증
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password);
  const validateEnable = emailValidation.result && passwordValidation.result;

  const {saveToken} = useContext(TokenContext);
  const submitHandler = async (e: FormEvent) => {
    // 사용자 입력 값
    const userInfo = {email: email, password: password}

    e.preventDefault();

    signIn(userInfo)
      .then((data) => {
        if (data) {
          saveToken(data.accessToken);
          alert("로그인이 완료되었습니다. 메인페이지로 이동합니다.")
        }
      })
      .catch((error) => {
        alert(error)
      })

  }

  return (
    <div className="signIn-Container">
      <h1 className="signIn-title">로그인</h1>
      <form className="signIn-from" onSubmit={submitHandler}>
        <EmailInput
          onValueChange={setEmail}
          validationResult={emailValidation}
        />
        <PasswordInput
          onValueChange={setPassword}
          validationResult={passwordValidation}
        />

        <div className="signIn-btn-wrapper">
          <button
            className={validateEnable ? 'signIn-activate-btn' : 'disable'}
            type="submit"
            data-testid="signin-button"
            disabled={!validateEnable}
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