import { Empty as AntEmpty } from "antd";

const Empty = () => {
  return (
    <AntEmpty
      image={AntEmpty.PRESENTED_IMAGE_SIMPLE}
      description={<span>{"No results found"}</span>}
    />
  );
};

export default Empty;
