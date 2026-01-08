"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { TextField } from "@/app/components/common/TextField";
import { Button } from "@/app/components/common/Button";

import { useLoginForm } from "./hooks/useLoginForm";
import { LOGIN_ERROR_MESSAGES } from "./login.constants";
import { LoginFormData } from "./login.types";

export const LoginContainer = () => {
  const router = useRouter();
  const { formData, errorType, updateField, validate } = useLoginForm();

  const onLoginSubmit = async (data: LoginFormData) => {
    // 실제 연결 시 주석 해제
    // try {
    //   await loginService.login(data);
    //   router.push("/");
    // } catch (err: any) {
    //   setErrorType("wrongPW"); // 예시 에러 처리
    // }

    // TODO: Login API 연결(loginService.login 사용)
    alert(`로그인 시도 데이터: ${data.id}, ${data.password}`);
    router.push("/");
  };

  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center text-center">
      <div className="break-keep max-w-lg w-full px-4">
        <h1 className="text-3xl font-medium">로그인</h1>
        <p className="mt-4 mb-10 text-lg font-light text-neutral-500">
          다시 만나서 반가워요!
        </p>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if(validate()) onLoginSubmit(formData);
          }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 m-auto"
        >
          <div className="w-full space-y-4">
            <TextField
              label="아이디(이메일)"
              type="text"
              autoComplete="username"
              value={formData.id}
              onChange={(e) => updateField("id", e.target.value)}
            />
            <TextField
              label="비밀번호"
              isPW={true}
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) => updateField("password", e.target.value)}
            />
          </div>

          <Button type="submit" className="bg-neutral-300/50! w-full md:w-auto h-full">
            확인
          </Button>
        </form>

        <div className="min-h-10 mt-4">
          {errorType && (
            <p className="text-sm text-amber-600">
              {LOGIN_ERROR_MESSAGES[errorType]}
            </p>
          )}
        </div>
        
        <Link href="/register" className="mt-20 block text-sm underline text-neutral-400 font-light">
          아직 회원이 아니신가요? → 회원가입
        </Link>
      </div>
    </div>
  );
};