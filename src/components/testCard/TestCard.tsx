import React from "react";
import { Test } from "../../types/types";
import cl from "./TestCard.module.scss";
import quiz from "../../assets/images/quiz.svg";

interface testCardProps {
  test: Test;
  switchingToTheTest: (id: number) => void;
}

function testCard({ test, switchingToTheTest }: testCardProps) {
  return (
    <div onClick={() => switchingToTheTest(test.id)} className={cl.card}>
      {/* <img className={cl.img} src={test.img} alt="test" /> */}
      <div className={cl.numberQuestions}>
        <img src={quiz} alt="" />
        {test.questions.length}
      </div>
      <h4 className={cl.title}>{test.title}</h4>
      <p className={cl.description}>{test.description}</p>
    </div>
  );
}

export default testCard;
