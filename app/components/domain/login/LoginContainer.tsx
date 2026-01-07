'use client'

import { useState } from "react";

import Link from "next/link";

import { TextField } from "@/app/components/common/TextField";
import { Button } from "@/app/components/common/Button";

export const LoginContainer = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [errorType, setErrorType] = useState<'blank' | 'noID' | 'wrongPW' | null>(null);
  const errorMsg = {
    'blank': '아이디와 비밀번호를 모두 입력해 주세요.',
    'noID': '회원정보가 존재하지 않는 아이디(이메일)입니다.',
    'wrongPW': '비밀번호가 틀렸습니다.',
  }

  const handleLogin = (e?: React.FormEvent) => {
    // form 태그 사용 시 페이지 새로고침 방지
    if (e) e.preventDefault();
    
    if (!id || !pw) return;
    console.log(id, pw);
    // TODO: 로그인 API 연결, 피드백 에러코드로 연결
  }

  return (
    <div className="h-[calc(100vh-3rem)] flex justify-center items-center text-center">
      <div className="break-keep">
        <h1 className="text-3xl font-medium">로그인</h1>
        <p className="mt-4 mb-10 text-lg font-light">
          Mychelin에 다시 오신 것을 환영합니다.
        </p>
        <form onSubmit={handleLogin} className="flex justify-between items-center max-w-110 m-auto">
          <div className="mr-4">
            <TextField
              label="아이디(이메일)"
              type="username"
              autoComplete="username"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
                if (errorType) setErrorType(null); // 타이핑 시 에러 초기화
              }}
              required
            ></TextField>
            <TextField
              className="mt-4 block"
              label="비밀번호"
              type="current-password"
              isPW={true}
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
                if (errorType) setErrorType(null); // 타이핑 시 에러 초기화
              }}
              required
            ></TextField>
          </div>

          <Button type="submit" className="bg-neutral-300/50!">로그인</Button>
        </form>
        <div className="min-h-6">
          <p className="mt-4 text-sm text-amber-600">
            {errorType && errorMsg[errorType]}
          </p>
        </div>
        <Link
          href="/register"
          className="mt-32 block text-sm underline text-neutral-400 font-light"
        >
          아직 Michelin에 가입하지 않으셨나요? &#8594; 회원가입
        </Link>
      </div>
    </div>
  );
};
