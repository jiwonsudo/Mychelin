"use client";

import { useState } from "react";

import Link from "next/link";

import { TextField } from "@/app/components/common/TextField";
import { Button } from "@/app/components/common/Button";

interface StageMsg {
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

export const RegisterContainer = () => {
  const [currStageIdx, setCurrStageIdx] = useState(0);
  const [isTFTouched, setIsTFTouched] = useState(false);
  const [errorType, setErrorType] = useState<
    "blank" | "invalid" | "mismatch" | null
  >(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pw: "",
  });

  const [pwConfirm, setPwConfirm] = useState(""); // 비밀번호 일치여부 확인용

  const fieldKeys = ["username", "email", "pw"] as const;
  const currField = fieldKeys[currStageIdx];
  const currValue = formData[currField];

  const stageMsgs: Record<number, StageMsg> = {
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
      title: `${formData.username}님의 이메일 주소를 알려주세요`,
      sub: "로그인 시 아이디로 사용될 거예요.",
      placeholderText: "example@email.com",
      blank: "이메일을 입력해 주세요.",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      invalidMsg: "유효하지 않은 이메일이에요. 다시 입력해 주세요.",
    },
    2: {
      type: "password",
      autoComplete: "new-password",
      title: `${formData.username}님이 사용하실 비밀번호를 입력해 주세요`,
      sub: "영문과 숫자를 모두 포함하여 8~20자리로 입력해 주세요.",
      placeholderText: "비밀번호 입력",
      blank: "비밀번호를 입력해 주세요.",
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
      invalidMsg: "조건에 맞지 않는 비밀번호예요. 다시 입력해 주세요.",
      notSameMsg: "비밀번호가 일치하지 않아요. 다시 입력해 주세요.",
    },
  };
  const currStageMsg = stageMsgs[currStageIdx];
  const numOfStages = Object.keys(stageMsgs).length;

  // 유효성 검사 로직 (errorType 상태 업데이트용)
  const checkValueValidity = (value: string) => {
    if (value.length === 0) {
      setErrorType("blank");
      return false;
    }
    if (currStageMsg.pattern && !currStageMsg.pattern.test(value)) {
      setErrorType("invalid");
      return false;
    }
    setErrorType(null);
    return true;
  };

  const handleNext = () => {
    setIsTFTouched(true);

    // 현재 값으로 최종 유효성 검사
    const isValid = checkValueValidity(currValue);

    // 단계 이동 처리
    if (isValid) {
      if (currStageIdx < numOfStages - 1) {
        setCurrStageIdx(currStageIdx + 1);
        setIsTFTouched(false);
        setErrorType(null);
      } else {
        alert(`회원가입 완료! ${JSON.stringify(formData)}`); // TODO: 회원가입 정보 백엔드로 연결하기
      }
    }
  };

  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center text-center">
      <div className="break-keep">
        <h1 className="text-3xl font-medium">{currStageMsg.title}</h1>
        <p className="mt-4 mb-10 text-lg font-light">{currStageMsg.sub}</p>
        <div className="flex justify-between items-center max-w-110 m-auto">
          <div className="mr-4">
            <TextField
              key={`field-${currStageIdx}`}
              className="block"
              label={currStageMsg.placeholderText}
              type={currStageMsg.type}
              isPW={currStageMsg.type === "password"}
              value={currValue}
              onChange={(e) => {
                const val = e.target.value;
                setFormData({ ...formData, [currField]: val });
                if (errorType) checkValueValidity(val); // 타이핑시 에러조건 벗어나면 에러 지우기
              }}
              onBlur={() => {
                setIsTFTouched(true);
                checkValueValidity(currValue);
              }}
              // 엔터키 지원
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
              required
            ></TextField>

            {currStageIdx === 2 && (
              <TextField
                key={`pw-confirm`}
                className="mt-4 block"
                label="비밀번호 확인"
                type="password"
                isPW={true}
                value={pwConfirm}
                onChange={(e) => {
                  setPwConfirm(e.target.value);
                }}
                onBlur={(e) => {
                  setIsTFTouched(true);
                  if (checkValueValidity(currValue)) {
                    if (currValue !== e.target.value) {
                      setErrorType("mismatch");
                    }
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (checkValueValidity(currValue)) {
                      if (currValue !== pwConfirm) {
                        setErrorType("mismatch");
                      } else handleNext();
                    }
                  }
                }}
              />
            )}
          </div>

          <Button onClick={handleNext} className="bg-neutral-300/50!">
            확인
          </Button>
        </div>
        <div className="min-h-6">
          {isTFTouched && errorType && (
            <p className="mt-4 text-sm text-amber-600">
              {errorType === "blank" && currStageMsg.blank}
              {errorType === "invalid" && currStageMsg.invalidMsg}
              {errorType === "mismatch" && currStageMsg.notSameMsg}
            </p>
          )}
        </div>
        <Link
          href="/login"
          className="mt-32 block text-sm underline text-neutral-400 font-light"
        >
          이미 Mychelin의 회원이신가요? &#8594; 로그인
        </Link>
      </div>
    </div>
  );
};
