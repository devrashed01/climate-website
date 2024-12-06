import { Button } from "antd";
import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #f9f9f9;

  > div {
    position: relative;
    z-index: 1;
    display: inline-block;
  }
`;

export const ButtonUI = styled(Button)`
  background-color: red;
`;

export const BloodImageBottom = styled.img`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  z-index: -1;
  user-select: none;
`;
