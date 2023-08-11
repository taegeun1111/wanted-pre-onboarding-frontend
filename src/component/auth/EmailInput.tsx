import React from 'react';
import "../sass/EmailInput.scss";

const EmailInput = () => {
  return (
    <section className={"email-input-container"}>
      <div className="email-input-wrapper">
        <h2 className="email-input-title">이메일</h2>
        <input
          className="email-input"
          type="email"
          data-testid="email-input"
        />
      </div>
      {/* validate 검증 */}
      <p className="email-validate">
        올바른 이메일 형식입니다.
      </p>

    </section>
  );
};

export default EmailInput;