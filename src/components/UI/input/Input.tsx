import React from "react";
import cl from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e?: any) => void;
  backround?: string;
}

function Input({ type, placeholder, value, onChange, backround }: InputProps) {
  return (
    <input
      className={cl.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ background: backround }}
    />
  );
}

export default Input;
