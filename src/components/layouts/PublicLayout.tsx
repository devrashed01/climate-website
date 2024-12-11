"use client";

import useAuth from "@/hooks/useAuth";
import { LogoutOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Typography } from "antd";
import Link from "next/link";
import styled from "styled-components";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: AuthLayoutProps) {
  const { authState, logout } = useAuth();

  return (
    <>
      <Header>
        <Typography.Title level={4}>
          <Flex justify="space-between">
            <Link href="/">Climate</Link>
            {authState.isAuthenticated && (
              <Space>
                {authState?.user?.email}
                <Button
                  type="primary"
                  danger
                  shape="circle"
                  size="large"
                  onClick={() => logout(false)}
                  icon={<LogoutOutlined />}
                />
              </Space>
            )}
          </Flex>
        </Typography.Title>
      </Header>
      <Container>{children}</Container>
    </>
  );
}

const Header = styled.div`
  padding: 1rem;
`;

const Container = styled.div`
  padding: 1rem;
  max-width: 1280px;
  margin: 0 auto;
`;
