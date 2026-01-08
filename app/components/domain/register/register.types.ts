export type RegisterErrorType = "blank" | "invalid" | "mismatch" | null;

export interface StageMsg {
  type: "text" | "email" | "password";
  autoComplete?: string;
  title: string;
  sub: string;
  placeholderText: string;
  blank: string;
  pattern?: RegExp;
  invalidMsg?: string;
  notSameMsg?: string;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
  // 유저 정보 등이 추가로 온다면 여기에 정의
}