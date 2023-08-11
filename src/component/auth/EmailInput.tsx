import React, {useEffect, useRef, useState} from 'react';
import "../sass/EmailInput.scss";

type Params = {
  onValueChange: (value: string) => void;
  value: string;
}

const EmailInput = ({onValueChange}: Params) => {

    //Debouncing 설정
    const [emailVal, setEmailVal] = useState('');
    useEffect(() => {
      const userInput = setTimeout(() => {
        console.log(emailVal);
        if (emailVal) {
          onValueChange(emailVal);

        }
      }, 500)

      return () => clearTimeout(userInput)
    }, [emailVal])

    const emailInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
      setEmailVal(event.currentTarget.value);
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
        <p className="email-validate">
          올바른 이메일 형식입니다.
        </p>

      </section>
    );
  }
;

export default EmailInput;