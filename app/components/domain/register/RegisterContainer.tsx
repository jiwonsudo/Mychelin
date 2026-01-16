// app/components/auth/RegisterContainer.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { TextField } from "@/app/components/common/TextField";
import { Button } from "@/app/components/common/Button";

import { useRegisterForm } from "./hooks/useRegisterForm";
// import { registerService } from "./register.services";
import { RegisterFormData } from "./register.types";

export const RegisterContainer = () => {
  const router = useRouter();
  const {
    currStageIdx,
    formData,
    pwConfirm,
    errorType,
    isTouched,
    isFocused,
    currStageMsg,
    currField,
    setFormData,
    setPwConfirm,
    setErrorType,
    setIsTouched,
    setIsFocused,
    handleNext,
    validate,
  } = useRegisterForm();

  // 초기를 제외하고는 title 앞에 유저 이름을 붙임
  const displayTitle =
    currStageIdx === 0
      ? currStageMsg.title
      : `${formData.username}${currStageMsg.title}`;

  const isInputValid =
    currStageIdx === 2
      ? validate(formData.password, pwConfirm) === null
      : validate(formData[currField]) === null;

  // 유저가 한 번이라도 건드렸고(isTouched), 에러가 있으며, 현재는 입력 중이 아닐 때만 노출
  const shouldShowError = isTouched && errorType && !isFocused;

  const onRegisterComplete = async (data: RegisterFormData) => {
    // try {
    //   await registerService.signUp(data);
    //   alert("회원가입이 완료되었습니다!");
    //   router.push("/login");
    // } catch (err) {
    //   // any 대신 Error 객체인지 확인하는 로직 추가
    // const message = err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다.";
    //   alert(message);
    // }
    // TODO: Register API 연결(registerService.signUp 사용)

    alert(
      `가입 완료!\n이름: ${data.username}\n이메일: ${data.email}\n비밀번호: ${data.password}`
    );
    router.push("/");
  };

  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center text-center">
      <div className="break-keep max-w-lg w-full px-4">
        <h1 className="text-3xl font-medium">{displayTitle}</h1>
        <p className="mt-4 mb-10 text-lg font-light text-neutral-500">
          {currStageMsg.sub}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 m-auto">
          <div className="w-full space-y-4">
            <TextField
              key={`field-${currStageIdx}`}
              label={currStageMsg.placeholderText}
              type={currStageMsg.type}
              isPW={currStageMsg.type === "password"}
              autoComplete={currStageMsg.autoComplete}
              value={formData[currField]}
              onChange={(e) => {
                setFormData({ ...formData, [currField]: e.target.value });
              }}
              onFocus={() => setIsFocused(true)} // 포커스 들어오면 에러 메시지 잠깐 숨김
              onBlur={() => {
                setIsFocused(false);
                setIsTouched(true);
                setErrorType(validate(formData[currField]));
              }}
              onKeyDown={(e) =>
                e.key === "Enter" && handleNext(onRegisterComplete)
              }
            />

            {currStageIdx === 2 && (
              <TextField
                label="비밀번호 확인"
                type="password"
                isPW={true}
                value={pwConfirm}
                onChange={(e) => setPwConfirm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                  setIsFocused(false);
                  setIsTouched(true);
                  setErrorType(validate(formData.password, pwConfirm));
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleNext(onRegisterComplete)
                }
              />
            )}
          </div>

          <Button
            onClick={() => handleNext(onRegisterComplete)}
            className="bg-neutral-300/50! w-full md:w-auto h-full"
            dimmed={!isInputValid}
          >
            확인
          </Button>
        </div>

        <div className="min-h-10 mt-4">
          {shouldShowError && (
            <p className="text-sm text-amber-600">
              {
                currStageMsg[
                  errorType === "blank"
                    ? "blank"
                    : errorType === "invalid"
                    ? "invalidMsg"
                    : "notSameMsg"
                ]
              }
            </p>
          )}
        </div>

        <Link
          href="/login"
          className="mt-20 block text-sm underline text-neutral-400 font-light"
        >
          이미 Mychelin의 회원이신가요? → 로그인
        </Link>
      </div>
    </div>
  );
};
