import { StageMsg } from "./register.types";

export const REGISTER_STAGES: Record<number, StageMsg> = {
  0: {
    type: "text",
    autoComplete: "nickname",
    title: "미식을 함께할 유저님의 이름을 알려주세요",
    sub: "실명이 아니어도 괜찮아요. 빈칸, 특수문자를 제외한 한글과 영어, 숫자만 사용할 수 있어요.",
    placeholderText: "닉네임을 입력하세요",
    blank: "닉네임을 입력해 주세요.",
    pattern: /^[a-zA-Z0-9가-힣]+$/,
    invalidMsg: "조건에 맞지 않는 닉네임이예요. 다시 입력해 주세요.",
  },
  1: {
    type: "email",
    autoComplete: "email",
    title: "님의 이메일 주소를 알려주세요",
    sub: "로그인 시 아이디로 사용될 거예요.",
    placeholderText: "example@email.com",
    blank: "이메일을 입력해 주세요.",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    invalidMsg: "유효하지 않은 이메일이에요. 다시 입력해 주세요.",
  },
  2: {
    type: "password",
    autoComplete: "new-password",
    title: "님이 사용하실 비밀번호를 입력해 주세요",
    sub: "영문과 숫자를 모두 포함하여 8~20자리로 입력해 주세요.",
    placeholderText: "비밀번호 입력",
    blank: "비밀번호를 입력해 주세요.",
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
    invalidMsg: "조건에 맞지 않는 비밀번호예요. 다시 입력해 주세요.",
    notSameMsg: "비밀번호가 일치하지 않아요. 다시 입력해 주세요.",
  },
};