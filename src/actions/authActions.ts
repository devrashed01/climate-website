import { publicRequest } from "@/config/axios.config";

export const login = (payload: LoginPayload) =>
  publicRequest.post<LoginResponse>("auth/login", payload);
