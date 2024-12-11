"use client";

import { useQuery } from "@tanstack/react-query";
import { Card, Col, Divider, Row, Typography } from "antd";

import { getAllPosts } from "@/actions/postActions";
import PublicLayout from "@/components/layouts/PublicLayout";
import Link from "next/link";
import styled from "styled-components";

const { Meta } = Card;

export default function Page() {
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: getAllPosts,
  });

  return (
    <PublicLayout>
      <Divider orientation="left">
        <Typography.Title>Posts</Typography.Title>
      </Divider>
      <Container>
        <Row gutter={[24, 24]}>
          {data?.map((post) => (
            <Col lg={6} key={post.id}>
              <Link href={`/post-details/${post.id}`}>
                <Card
                  hoverable
                  cover={<img alt="example" src={post.imageUrl} />}
                >
                  <Meta title={post.title} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </PublicLayout>
  );
}

const Container = styled.div`
  padding: 1rem;
  background-color: #f0f2f5;
`;
