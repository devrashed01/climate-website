"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BloodImageBottom, Center } from "./style";

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

  return (
    <Center>
      <div>
        {children}
        <BloodImageBottom src="/assets/4.png" />
      </div>
    </Center>
  );
}
