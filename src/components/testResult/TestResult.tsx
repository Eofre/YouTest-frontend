import React from "react";
import { Test } from "../../types/types";
import QuestionCard from "../questionCard/QuestionCard";
import Button from "../UI/button/Button";
import cl from "./TestResult.module.scss";

interface TestResultProps {
  scores: number;
  mark: string;
  test: Test;
  answersUser: number[];
  startTheTestAgain: () => void;
}

function TestResult({
  scores,
  mark,
  test,
  answersUser,
  startTheTestAgain,
}: TestResultProps) {
  return (
    <div className={cl.testResult}>
      <h2 className={cl.title}>{test.title}</h2>
      <div className={cl.btns}>
        <Button onClick={() => startTheTestAgain()}>Пройти тест заново</Button>
        <Button>Выход</Button>
      </div>
      <h3>Результат</h3>
      <div>
        <p>Баллы: {scores}</p>
        <p>Оценка: {mark}</p>
      </div>
      <h3>Вопросы и ответы</h3>
      <ul className={cl.cards}>
        {test.questions.map((question, index) => (
          <QuestionCard
            key={question.question}
            question={question}
            answerUser={answersUser[index]}
          />
        ))}
      </ul>
    </div>
  );
}

export default TestResult;
