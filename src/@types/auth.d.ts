interface LoginPayload {
  email: string;
  password: string;
}

interface SignUpPayload {
  user_name: string;
  password: string;
  phone: string;
  division: string;
  district: string;
  thana: string;
  organisation_name: string;
  otp: string;
}

interface AuthContextType {
  authState: AuthState;
  login: (user: ProfileResponse) => void;
  logout: () => void;
}

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
}

interface SignUpResponse {
  message: string;
  success: boolean;
}

interface LoginResponse {
  token: string;
  message: string;
}

interface User {
  id: number;
  email: string;
  role: string;
  name: string;
}
