import React from "react";
import { Test } from "../../types/types";
import cl from "./TestCard.module.scss";

interface testCardProps {
  test: Test;
  switchingToTheTest: (id: number) => void;
}

function testCard({ test, switchingToTheTest }: testCardProps) {
  return (
    <div onClick={() => switchingToTheTest(test.id)} className={cl.card}>
      <img className={cl.img} src={test.img} alt="the picture of the test" />
      {/* <p className={cl.numberQuestions}>{numberOfQuestions}</p> */}
      <h4 className={cl.title}>{test.title}</h4>
    </div>
  );
}

export default testCard;
