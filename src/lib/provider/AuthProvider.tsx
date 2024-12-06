"use client";

import { getProfile } from "@/actions/profileActions";
import { AuthContext } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const initState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

export default function AuthProvider({ children }: Props) {
  const [authState, setAuthState] = useState<AuthState>(initState);

  const { data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  useEffect(() => {
    if (data) {
      setAuthState({
        isAuthenticated: true,
        isLoading: false,
        user: data,
      });
    }
  }, [data]);

  const login = (data: User) => {
    setAuthState({
      isAuthenticated: true,
      isLoading: false,
      user: data,
    });
  };

  const logout = (isRedirect: boolean = true) => {
    localStorage.removeItem("token");
    setAuthState(initState);
    if (isRedirect) {
      window.location.href = "/login";
    }
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
