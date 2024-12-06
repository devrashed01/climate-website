import AuthLayoutWrapper from "@/components/layouts/AuthLayout";
import { Card } from "antd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMH | Login",
  description:
    "Blood Management Hub (BMH) – an innovative platform designed to streamline blood donation, storage, and distribution. Ideal for hospitals, blood banks, and donors seeking an efficient blood management solution. Learn more about our mission to enhance blood availability and accessibility.",
  openGraph: {
    images: ["/login-thumbnail.png"],
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthLayoutWrapper>
      <Card
        styles={{
          body: {
            padding: "1rem",
          },
        }}
      >
        {children}
      </Card>
    </AuthLayoutWrapper>
  );
}
