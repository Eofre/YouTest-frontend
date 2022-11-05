import React from "react";
import cl from "./TestGame.module.scss";
import { Question } from "../../types/types";

interface TestGameProps {
  question: Question;
  chooseAnAnswer: () => void;
}

function TestGame({ question, chooseAnAnswer }: TestGameProps) {
  const answers: string[] = question.answers;
  return (
    <div className={cl.testGame}>
      <div className={cl.left}>
        <h3 className={cl.question}>{question.question}</h3>
        <img className={cl.img} src={question.img} alt="" />
      </div>
      <ul className={cl.answers}>
        {answers.map((item) => (
          <li className={cl.answer} key={item} onClick={() => chooseAnAnswer()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestGame;
