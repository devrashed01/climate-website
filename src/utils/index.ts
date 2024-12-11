import { App } from "antd";

export const useCopyToClipboard = () => {
  const { message } = App.useApp();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    message.success("Copied to clipboard");
  };

  return { copyToClipboard };
};
