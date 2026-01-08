"use client";

import { useState } from "react";

import { LoginErrorType, LoginFormData } from "@/app/components/domain/login/login.types";

export const useLoginForm = () => {
  const [formData, setFormData] = useState<LoginFormData>({ id: "", password: "" });
  const [errorType, setErrorType] = useState<LoginErrorType>(null);

  const updateField = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorType) setErrorType(null); // 사용자가 다시 입력하면 에러 제거
  };

  const validate = () => {
    if (!formData.id || !formData.password) {
      setErrorType("blank");
      return false;
    }
    return true;
  };

  return { formData, errorType, setErrorType, updateField, validate };
};