"use client";

import { useState } from "react";
import { REGISTER_STAGES } from "../register.constants";
import { RegisterErrorType, RegisterFormData } from "../register.types";

export const useRegisterForm = () => {
  const [currStageIdx, setCurrStageIdx] = useState(0);
  const [formData, setFormData] = useState<RegisterFormData>({ username: "", email: "", password: "" });
  const [pwConfirm, setPwConfirm] = useState("");
  const [errorType, setErrorType] = useState<RegisterErrorType>(null);
  const [isTouched, setIsTouched] = useState(false);

  const fieldKeys = ["username", "email", "password"] as const;
  const currField = fieldKeys[currStageIdx];
  const currStageMsg = REGISTER_STAGES[currStageIdx];

  const validate = (value: string, confirmVal?: string) => {
    if (!value) return "blank";
    if (currStageMsg.pattern && !currStageMsg.pattern.test(value)) return "invalid";
    if (confirmVal !== undefined && value !== confirmVal) return "mismatch";
    return null;
  };

  const handleNext = (onComplete: (data: RegisterFormData) => void) => {
    setIsTouched(true);
    const err = validate(formData[currField], currStageIdx === 2 ? pwConfirm : undefined);
    
    if (err) {
      setErrorType(err);
      return;
    }

    if (currStageIdx < Object.keys(REGISTER_STAGES).length - 1) {
      setCurrStageIdx(prev => prev + 1);
      setIsTouched(false);
      setErrorType(null);
    } else {
      onComplete(formData);
    }
  };

  return {
    currStageIdx, formData, pwConfirm, errorType, isTouched, currStageMsg, currField,
    setFormData, setPwConfirm, setErrorType, setIsTouched, handleNext, validate
  };
};