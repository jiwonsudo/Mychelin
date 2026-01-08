export type LoginErrorType = 'blank' | 'noID' | 'wrongPW' | null;

export interface LoginFormData {
  id: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  user?: {
    name: string;
    email: string;
  };
}