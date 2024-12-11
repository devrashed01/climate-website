"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Center } from "./style";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayoutWrapper({ children }: AuthLayoutProps) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/post");
    }
  }, [router]);

  return <Center>{children}</Center>;
}
