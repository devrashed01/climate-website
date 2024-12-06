import { Typography } from "antd";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div>
      <Typography.Title level={4}>{title}</Typography.Title>
    </div>
  );
}
