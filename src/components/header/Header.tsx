import React from "react";
import { Link } from "react-router-dom";
import Conteiner from "../conteiner/Conteiner";
import Navigation from "../navigation/Navigation";
import cl from "./Header.module.scss";

function Header() {
  return (
    <header className={cl.header}>
      <Conteiner>
        <div className={cl.headerInner}>
          <Link to="/" className={cl.logo}>
            You<span>Test</span>
          </Link>
          <Navigation />
        </div>
      </Conteiner>
    </header>
  );
}

export default Header;
