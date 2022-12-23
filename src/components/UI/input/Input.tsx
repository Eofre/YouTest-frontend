import React, { FC, InputHTMLAttributes } from "react";
import cl from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ ...rest }) => {
  return <input className={cl.input} {...rest} />;
};

export default Input;
