export interface ValidationResult {
  result: boolean;
  message?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email.includes('@')) {
    return { result: false, message: `이메일 주소는 '@'를 포함해야 합니다.` };
  }
  return { result: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (password.trim().length < 8) {
    return { result: false, message: '비밀번호는 8자 이상이어야 합니다.' };
  }
  return { result: true };
};
