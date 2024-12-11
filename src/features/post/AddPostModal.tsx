import { Button, Col, Form, FormInstance, Input, Modal, Row } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  isOpen: boolean;
  isLoading: boolean;
  form: FormInstance;
  onClose: () => void;
  onSubmit: (values: PostPayload) => void;
}

export default function AddPostModal({
  isOpen,
  isLoading,
  form,
  onClose,
  onSubmit,
}: Props) {
  const isUpdate = !!form.getFieldValue("id");

  return (
    <Modal
      title={isUpdate ? "Update Post" : "Add Post"}
      maskClosable={false}
      open={isOpen}
      footer={false}
      onCancel={onClose}
    >
      <Form form={form} size="large" layout="vertical" onFinish={onSubmit}>
        {isUpdate && (
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
        )}
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="title"
              label={"Title"}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="description"
              label={"Description"}
              rules={[{ required: true }]}
            >
              <ReactQuill theme="snow" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="imageUrl"
              label={"Image URL"}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="videoUrl" label={"YTD Video ID"}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end" gutter={16}>
          <Col>
            <Button onClick={onClose}>{"Cancel"}</Button>
          </Col>
          <Col>
            <Button loading={isLoading} type="primary" htmlType="submit">
              {"Submit"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
