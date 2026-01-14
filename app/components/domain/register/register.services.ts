import { RegisterFormData, RegisterResponse } from "./register.types";

export const registerService = {
  async signUp(data: RegisterFormData): Promise<RegisterResponse> { 
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "회원가입 실패");
      }
      
      return result;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  }
};