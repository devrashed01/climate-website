"use client";

import useAuth from "@/hooks/useAuth";

export default function Page() {
  const { authState } = useAuth();

  return (
    <>
      <h1>Welcome to the Dashboard, {authState?.user?.user_name}</h1>
    </>
  );
}
