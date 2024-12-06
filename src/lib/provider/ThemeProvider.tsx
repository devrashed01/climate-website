"use client";

import useAuth from "@/hooks/useAuth";
import { ConfigProvider, ThemeConfig } from "antd";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Props) {
  const { authState } = useAuth();

  const themeConfig: ThemeConfig = {
    token: {
      ...(authState.configuration?.primary_color && {
        colorPrimary: authState.configuration?.primary_color,
      }),
      ...(authState.configuration?.text_color && {
        colorText: authState.configuration?.text_color,
      }),
      ...(authState.configuration?.secondary_color && {
        colorTextSecondary: authState.configuration?.secondary_color,
      }),
      ...(authState.configuration?.background_color && {
        colorBgBase: authState.configuration?.background_color,
      }),
    },
    components: {
      Button: {
        ...(authState.configuration?.button_color && {
          primaryColor: authState.configuration?.button_color,
        }),
      },
    },
  };

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
}
