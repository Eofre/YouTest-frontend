import React from "react";
import cl from "./TestGame.module.scss";
import { Question } from "../../types/types";

interface TestGameProps {
  question: Question;
  chooseAnAnswer: (indexAnswer: number) => void;
}

function TestGame({ question, chooseAnAnswer }: TestGameProps) {
  const answers: string[] = question.answers;
  return (
    <div className={cl.testGame}>
      <h3 className={cl.question}>{question.question}</h3>
      <ul className={cl.imgs}>
        <li>
          <img className={cl.img} src={question.img} alt="" />
        </li>
        <li>
          <img className={cl.img} src={question.img} alt="" />
        </li>
      </ul>

      {/* <div className={cl.left}>
       
        <img className={cl.img} src={question.img} alt="" />
      </div> */}
      <div>
        <p className={cl.text}>Выберите ответ</p>
        <ul className={cl.answers}>
          {answers.map((item, index) => (
            <li
              className={cl.answer}
              key={item}
              onClick={() => chooseAnAnswer(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TestGame;
