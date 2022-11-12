import React from "react";
import cl from "./Navigation.module.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className={cl.list}>
        <li className={cl.item}>
          <Link className={cl.link} to="/">
            Главная
          </Link>
        </li>
        <li className={cl.item}>
          <Link className={cl.link} to="/createTest">
            Создать тест
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
