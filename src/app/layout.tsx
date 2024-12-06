import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App } from "antd";
import type { Metadata } from "next";
import localFont from "next/font/local";

import AuthProvider from "@/lib/provider/AuthProvider";
import QueryProvider from "@/lib/provider/QueryProvider";
import ThemeProvider from "@/lib/provider/ThemeProvider";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BMH | Home",
  description:
    "Blood Management Hub (BMH) – an innovative platform designed to streamline blood donation, storage, and distribution. Ideal for hospitals, blood banks, and donors seeking an efficient blood management solution. Learn more about our mission to enhance blood availability and accessibility.",
  openGraph: {
    images: ["/thumbnail.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <AuthProvider>
            <ThemeProvider>
              <StyledComponentsRegistry>
                <QueryProvider>
                  <App>{children}</App>
                </QueryProvider>
              </StyledComponentsRegistry>
            </ThemeProvider>
          </AuthProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
