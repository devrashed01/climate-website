"use client";

import { getPublicPostDetails } from "@/actions/postActions";
import PublicLayout from "@/components/layouts/PublicLayout";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Image as AntImage, Button, Divider, Typography } from "antd";
import Link from "next/link";
import { useParams } from "next/navigation";
import styled from "styled-components";

export default function Page() {
  const { authState } = useAuth();
  const { id } = useParams<{ id: string }>();

  const { data } = useQuery({
    queryKey: ["post", id],
    queryFn: () => getPublicPostDetails(id),
  });

  return (
    <PublicLayout>
      {data?.videoUrl ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${data?.videoUrl}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ) : (
        <Image src={data?.imageUrl} alt="" />
      )}
      <Typography.Title>{data?.title}</Typography.Title>
      <div
        dangerouslySetInnerHTML={{
          __html: data?.description || "",
        }}
      />

      <Divider orientation="left">
        <Typography.Title>Discussions</Typography.Title>
      </Divider>
      {authState.isAuthenticated ? (
        <Button type="primary">Add Comment</Button>
      ) : (
        <>
          <Typography.Paragraph>
            Please login to add a comment
          </Typography.Paragraph>
          <Button type="primary">
            <Link href={`/login?redirectUrl=${window.location.href}`}>
              Login
            </Link>
          </Button>
        </>
      )}
    </PublicLayout>
  );
}

const Image = styled(AntImage)`
  max-height: 30rem;
  margin-bottom: 1rem;
`;
