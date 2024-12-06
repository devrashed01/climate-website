"use client";

import { AuthContext } from "@/context/AuthContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const initState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  configuration: null,
};

export default function AuthProvider({ children }: Props) {
  const [authState, setAuthState] = useState<AuthState>(initState);

  const login = (data: User) => {
    setAuthState({
      isAuthenticated: true,
      isLoading: false,
      user: data,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState(initState);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
