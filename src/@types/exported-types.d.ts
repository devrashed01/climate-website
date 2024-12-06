import { FormItemProps, InputProps, SelectProps } from "antd";

type FormField = FormItemProps &
  SelectProps &
  InputProps & {
    collSize?: number;
    onPreview?: (file: UploadFile) => void;
  };
