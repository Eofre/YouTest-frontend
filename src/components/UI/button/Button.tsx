import React from "react";
import cl from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactChild | React.ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={cl.btn}>
      {children}
    </button>
  );
}
