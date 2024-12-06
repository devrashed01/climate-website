"use client";

import { LogoutOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
import styled from "styled-components";

import { getAllPosts } from "@/actions/postActions";
import useAuth from "@/hooks/useAuth";

const { Meta } = Card;

export default function Page() {
  const { authState, logout } = useAuth();

  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return (
    <>
      <Header>
        <Typography.Title level={4}>
          <Flex justify="space-between">
            Climate
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

      <Container>
        <Divider orientation="left">
          <Typography.Title>Posts</Typography.Title>
        </Divider>
        <Row gutter={[24, 24]}>
          {data?.map((post) => (
            <Col lg={6} key={post.id}>
              <Card hoverable cover={<img alt="example" src={post.imageUrl} />}>
                <Meta title={post.title} description={post.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 1rem;
  background-color: #f0f2f5;
`;

const Header = styled.div`
  padding: 1rem;
`;
