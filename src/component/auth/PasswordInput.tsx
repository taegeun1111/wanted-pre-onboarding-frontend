import React, {useEffect, useState} from 'react';
import "../sass/auth/PasswordInput.scss"
import {ValidationResult} from "./validation";

type Params = {
  onValueChange: (value: string) => void;
  validationResult : ValidationResult;
}
const PasswordInput = ({onValueChange,validationResult}:Params) => {
  const [passwordVal, setPasswordVal] = useState('');
  const [showValidation,setShowValidation] = useState(false);

  // Debouncing 설정
  useEffect(() => {
    const userInput = setTimeout(() => {
      if (passwordVal.length >= 8) {
        onValueChange(passwordVal);
        setShowValidation(true)
      }
    }, 500)
    return () => clearTimeout(userInput)
  }, [passwordVal])

  const passwordInputHandler = (e :React.FormEvent<HTMLInputElement>) => {
    setPasswordVal(e.currentTarget.value);
  }

  const showValidationHandler = () => {
    onValueChange(passwordVal)
    setShowValidation(true)
  }

  return (
    <section className={"password-input-container"}>

      <div className="password-input-wrapper">
        <h2 className="password-input-title">패스워드</h2>
        <input
          className="password-input"
          type="password"
          placeholder="********"
          onKeyUp={passwordInputHandler}
          defaultValue={''}
          onBlur={showValidationHandler}
          data-testid="password-input"
          autoComplete="current-password"
        />
      </div>
      {/* validate 검증 */}
      {!validationResult.result && showValidation &&
      <p className="password-validate">
        {validationResult.message}
      </p>
      }

    </section>
  );
};

export default PasswordInput;