"use client";

import { ConfigProvider, ThemeConfig } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const themeConfig: ThemeConfig = {
    token: {},
  };

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
