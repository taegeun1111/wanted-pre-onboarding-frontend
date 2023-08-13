import React, {useEffect, useState} from 'react';
import "../sass/auth/PasswordInput.scss"
import {ValidationResult} from "./validation";

type Params = {
  onValueChange: (value: string) => void;
  validationResult : ValidationResult;
}
const PasswordInput = ({onValueChange,validationResult}:Params) => {
  const [passwordVal, setPasswordVal] = useState('');

  //Debouncing 설정
  useEffect(() => {
    const userInput = setTimeout(() => {
      // console.log(passwordVal);
      if (passwordVal) {
        onValueChange(passwordVal);

      }
    }, 500)
    return () => clearTimeout(userInput)
  }, [passwordVal])

  const passwordInputHandler = (e :React.FormEvent<HTMLInputElement>) => {
    setPasswordVal(e.currentTarget.value);
  }

  return (
    <section className={"password-input-container"}>

      <div className="password-input-wrapper">
        <h2 className="password-input-title">패스워드</h2>
        <input
          className="password-input"
          type="password"
          onKeyUp={passwordInputHandler}
          defaultValue={''}
          data-testid="password-input"
        />
      </div>
      {/* validate 검증 */}
      {!validationResult.result &&
      <p className="password-validate">
        {validationResult.message}
      </p>
      }

    </section>
  );
};

export default PasswordInput;