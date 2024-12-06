import { Divider as AntDivider, DividerProps } from "antd";

const Divider = ({ children, style, ...rest }: DividerProps) => {
  return (
    <AntDivider
      {...rest}
      style={{
        ...style,
        ...{
          marginTop: 0,
        },
      }}
    >
      {children}
    </AntDivider>
  );
};

export default Divider;
