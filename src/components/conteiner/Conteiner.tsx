import React from "react";
import cl from "./Conteiner.module.scss";

interface ConteinerProps {
  children: React.ReactChild | React.ReactNode;
  maxWidth?: string;
}

function Conteiner({ children, maxWidth }: ConteinerProps) {
  return (
    <div className={cl.conteiner} style={{ maxWidth }}>
      {children}
    </div>
  );
}

export default Conteiner;
