import React from "react";
import Conteiner from "../conteiner/Conteiner";
import Navigation from "../navigation/Navigation";
import cl from "./Header.module.scss";

function Header() {
  return (
    <header className={cl.header}>
      <Conteiner>
        <div className={cl.headerInner}>
          <a className={cl.logo} href="#">
            You<span>Test</span>
          </a>
          <Navigation />
        </div>
      </Conteiner>
    </header>
  );
}

export default Header;
