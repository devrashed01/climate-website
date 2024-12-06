"use client";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { App, Button, Form, Input, Row, Typography } from "antd";
import { useRouter } from "next/navigation";

import { login } from "@/actions/authActions";

const { Title } = Typography;

export default function Login() {
  const { message } = App.useApp();
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: login,
  });

  const onFinish = (values: LoginPayload) => {
    mutateAsync(values)
      .then((data) => {
        message.success(data.data.message);
        localStorage.setItem("token", data.data.token);
        router.push("/post");
      })
      .catch((error: Error) => {
        message.error(error.message);
      });
  };

  return (
    <div
      style={{
        width: "20rem",
        maxWidth: "100%",
      }}
    >
      <Title style={{ marginTop: 0 }} level={4}>
        Climate Admin
      </Title>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark="optional"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Row justify="space-between" align="middle">
          <Button loading={isPending} type="primary" htmlType="submit">
            Log in
          </Button>
        </Row>
      </Form>
    </div>
  );
}