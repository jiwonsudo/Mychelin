import { LoginErrorType } from "./login.types";

export const LOGIN_ERROR_MESSAGES: Record<Exclude<LoginErrorType, null>, string> = {
  blank: '아이디와 비밀번호를 모두 입력해 주세요.',
  noID: '존재하지 않는 계정입니다.',
  wrongPW: '비밀번호가 일치하지 않습니다.',
};