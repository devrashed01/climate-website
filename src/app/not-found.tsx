"use client";

import { Button, Result } from "antd";
import { useRouter } from "next/navigation";
import styled from "styled-components";

export default function NotFound() {
  const router = useRouter();
  return (
    <Container>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => router.push("/")}>
            Back Home
          </Button>
        }
      />
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
