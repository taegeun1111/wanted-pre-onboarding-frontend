import React, {useEffect, useState} from 'react';
import "../sass/auth/EmailInput.scss";
import {ValidationResult} from "./validation";

type Params = {
  onValueChange: (value: string) => void;
  validationResult : ValidationResult;
}

const EmailInput = ({onValueChange,validationResult}: Params) => {
    const [emailVal, setEmailVal] = useState('');

    //Debouncing 설정
    useEffect(() => {
      const userInput = setTimeout(() => {
        console.log(emailVal);
        if (emailVal) {
          onValueChange(emailVal);

        }
      }, 500)

      return () => clearTimeout(userInput)
    }, [emailVal])

    const emailInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
      setEmailVal(e.currentTarget.value);
    };

    return (
      <section className="email-input-container">
        <div className="email-input-wrapper">
          <h2 className="email-input-title">이메일</h2>
          <input
            className="email-input"
            type="email"
            onKeyUp={emailInputHandler}
            defaultValue={''}
            autoFocus={true}
            data-testid="email-input"
          />
        </div>

        {/* validate 검증 */}
        {!validationResult.result &&
          <p className="email-validate">
            {validationResult.message}
          </p>
        }

      </section>
    );
  }
;

export default EmailInput;