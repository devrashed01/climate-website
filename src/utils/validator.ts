import { RuleObject } from "antd/es/form";
import { StoreValue } from "antd/es/form/interface";

type Validator = (
  rule: RuleObject,
  value: StoreValue,
  callback: (error?: string) => void,
) => Promise<void> | void;

export const isDigitValidator: Validator = (rule, value, callback) => {
  if (value.length !== 11) {
    callback("Phone number must be 11 digits");
    return;
  }
  if (!/^\d+$/.test(value)) {
    callback("Phone number must be digits");
    return;
  }
  callback();
};
