"use client";

import { addPost, getPosts, updatePost } from "@/actions/postActions";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import AddPostModal from "@/features/post/AddPostModal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { App, Button, Row, Table, Typography } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import usePostUtils from "./utils";

export default function Post() {
  const { message } = App.useApp();
  const { columns, form, isPendingDelete, isOpen, setIsOpen } = usePostUtils();
  const { push } = useRouter();
  const params = useSearchParams();
  const queryClient = useQueryClient();

  const page = params.get("page") || 1;
  const limit = params.get("per_page") || 10;
  const postParams = {
    page: page,
    limit: limit,
  };

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ["posts", postParams],
    queryFn: () => getPosts(postParams),
  });

  const { mutate: handleAddPost, isPending } = useMutation({
    mutationFn: (values: PostPayload) => {
      if (!values.id) {
        return addPost(values);
      }
      return updatePost(values.id, values);
    },
    onSuccess: () => {
      message.success("Post added successfully");
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
      form.resetFields();
      setIsOpen(false);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  const posts = data?.data || [];

  const handleClose = () => {
    form.resetFields();
    setIsOpen(false);
  };
  const handleAddPostModalOpen = () => setIsOpen(true);

  const handlePaginationChange = (page: number, pageSize: number) => {
    push(`?page=${page}&limit=${pageSize}`);
  };

  return (
    <DashboardLayout>
      <AddPostModal
        form={form}
        isOpen={isOpen}
        isLoading={isPending}
        onClose={handleClose}
        onSubmit={handleAddPost}
      />
      <Row justify="space-between">
        <Typography.Title level={4}>
          {"Posts"} ({posts.length}/{data?.count})
        </Typography.Title>
        <Button type="primary" onClick={handleAddPostModalOpen}>
          {"Add Post"}
        </Button>
      </Row>
      <Table
        style={{ marginTop: 16 }}
        rowKey="id"
        loading={isLoading || isRefetching || isPendingDelete}
        dataSource={posts}
        columns={columns}
        pagination={{
          total: data?.count,
          pageSize: Number(limit),
          current: Number(page),
          onChange: handlePaginationChange,
          showSizeChanger: true,
        }}
        size="small"
      />
    </DashboardLayout>
  );
}
