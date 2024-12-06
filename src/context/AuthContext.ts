import { createContext } from "react";

const init = {
  user: null,
} as unknown as AuthContextType;

export const AuthContext = createContext<AuthContextType>(init);
