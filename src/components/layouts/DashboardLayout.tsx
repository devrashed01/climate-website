"use client";

import { LogoutOutlined, ReconciliationOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, Space, theme, Typography } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

import { getProfile } from "@/actions/profileActions";
import useAuth from "@/hooks/useAuth";
import { Spin } from "../antd/Spin";

const { Header, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  href: string,
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link href={href}>{label}</Link>,
    href,
  } as MenuItem;
}

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AuthLayoutProps) {
  const navigate = useRouter();
  const { logout, authState } = useAuth();
  const pathname = usePathname();

  const items: MenuItem[] = [
    {
      key: "post",
      label: "Post",
      type: "group",
      children: [getItem("/post", "Post", "post", <ReconciliationOutlined />)],
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isPending, isError, data } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
      navigate.push("/login");
    }
  }, [isError, navigate]);

  if (isPending || isError) {
    return <Spin type="window-centre" />;
  }

  if (data.role !== "admin") {
    navigate.push("/");
  }

  if (!authState.isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          height: "4rem",
          alignItems: "center",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <Space>
          <h1>Climate</h1>
          <Button size="small" type="primary">
            <Link href="/" target="_blank">
              View Website
            </Link>
          </Button>
        </Space>

        <Space>
          <Typography.Title level={5}>{authState.user?.name}</Typography.Title>
          <Button
            type="primary"
            danger
            shape="circle"
            size="large"
            onClick={() => logout()}
            icon={<LogoutOutlined />}
          />
        </Space>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{ background: colorBgContainer, padding: "0.4rem" }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            // defaultOpenKeys={["sub1"]}
            style={{
              height: "calc(100vh - 5rem)",
              borderRight: 0,
              overflowY: "auto",
            }}
            items={items}
          />
        </Sider>
        <div style={{ padding: "1.2rem", width: "100%" }}>{children}</div>
      </Layout>
    </Layout>
  );
}
