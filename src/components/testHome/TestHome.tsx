import React from "react";
import { Test } from "../../types/types";
import Button from "../UI/button/Button";
import cl from "./TestHome.module.scss";

interface TestHomeProps {
  test: Test;
  startPassingTheTest: () => void;
}

function TestHome({ test, startPassingTheTest }: TestHomeProps) {
  return (
    <div className={cl.testHome}>
      {/* <img src={test.img} alt="test" className="test__img" /> */}
      <h2 className={cl.title}>{test.title}</h2>
      <p className={cl.description}>{test.description}</p>
      <div className={cl.btn}>
        <Button onClick={startPassingTheTest}>Начать</Button>
      </div>
    </div>
  );
}

export default TestHome;
