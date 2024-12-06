"use client";

import { deletePost } from "@/actions/postActions";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Image, Popconfirm, Space, TableColumnsType } from "antd";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useState } from "react";

dayjs.extend(relativeTime);

export default function usePostUtils() {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: handlePostDelete, isPending } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handlePostEdit = (record: Post) => {
    form.setFieldsValue(record);
    setIsOpen(true);
  };

  const columns: TableColumnsType<Post> = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image Url",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (value) => {
        return (
          <Image
            style={{ objectFit: "cover" }}
            width={50}
            height={50}
            src={value}
            alt="Post Image"
          />
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "id",
      width: 100,
      render: (id, record) => {
        return (
          <Space>
            <Button
              size="small"
              onClick={() => handlePostEdit(record)}
              icon={<EditOutlined />}
              danger
            ></Button>
            <Popconfirm
              title={"Are you sure to delete this donor?"}
              onConfirm={() => handlePostDelete(id)}
              okText={"Yes"}
              cancelText={"No"}
            >
              <Button size="small" icon={<DeleteOutlined />} danger></Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return {
    columns,
    form,
    isOpen,
    setIsOpen,
    isPendingDelete: isPending,
  };
}
