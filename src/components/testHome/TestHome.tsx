import React from "react";
import { Test } from "../../types/types";
import Button from "../UI/button/Button";

interface TestHomeProps {
  test: Test;
  startPassingTheTest: () => void;
}

function TestHome({ test, startPassingTheTest }: TestHomeProps) {
  return (
    <div className="test__inner">
      <img src={test.img} alt="the picture of the test" className="test__img" />
      <h2 className="test__title">{test.title}</h2>
      <p className="test__description">{test.description}</p>
      <Button onClick={startPassingTheTest}>Начать</Button>
    </div>
  );
}

export default TestHome;
