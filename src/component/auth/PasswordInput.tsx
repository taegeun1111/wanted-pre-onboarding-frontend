import React from 'react';
import "../sass/PasswordInput.scss"
const PasswordInput = () => {
  return (
    <section className={"password-input-container"}>

      <div className="password-input-wrapper">
        <h2 className="password-input-title">패스워드</h2>
        <input
          className="password-input"
          type="password"
          data-testid="password-input"
        />
      </div>
      {/* validate 검증 */}
      <p className="password-validate">
        검증값
      </p>

    </section>
  );
};

export default PasswordInput;