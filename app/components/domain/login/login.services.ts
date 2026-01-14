import { LoginFormData, LoginResponse } from "./login.types";

export const loginService = {
  async login(data: LoginFormData): Promise<LoginResponse> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "로그인 실패");

    return result;
  }
};