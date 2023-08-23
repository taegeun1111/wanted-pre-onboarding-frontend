import React, { useState } from 'react';
import '../sass/auth/EmailInput.scss';
import { ValidationResult } from './validation';

type Params = {
  onValueChange: (value: string) => void;
  validationResult: ValidationResult;
};

const EmailInput = ({ onValueChange, validationResult }: Params) => {
  const [emailVal, setEmailVal] = useState('');
  const [showValidation, setShowValidation] = useState(false);

  const emailInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setEmailVal(e.currentTarget.value);
  };

  const showValidationHandler = () => {
    onValueChange(emailVal);
    setShowValidation(true);
  };

  return (
    <section className="email-input-container">
      <div className="email-input-wrapper">
        <h2 className="email-input-title">이메일</h2>
        <input
          className="email-input"
          type="email"
          placeholder="test@test.com"
          onKeyUp={emailInputHandler}
          defaultValue={''}
          autoFocus={true}
          onBlur={showValidationHandler}
          data-testid="email-input"
          autoComplete="current-password"
        />
      </div>

      {/* validate 검증 */}
      {!validationResult.result && showValidation && (
        <p className="email-validate">{validationResult.message}</p>
      )}
    </section>
  );
};
export default EmailInput;
