import React from "react";
import cl from "./Answers.module.scss";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

interface AnswersProps {
  answers: string[];
  addAnswer: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  handlerAnswer: (
    e: React.ChangeEvent<HTMLInputElement>,
    indexQuestion: number,
    indexAnswer: number
  ) => void;
  indexQuestion: number;
}

function Answers({
  answers,
  addAnswer,
  handlerAnswer,
  indexQuestion,
}: AnswersProps) {
  return (
    <div className={cl.answers}>
      {answers.map((answer, index) => (
        <Input
          key={index}
          value={answer}
          onChange={(e) => handlerAnswer(e, indexQuestion, index)}
          type="text"
          placeholder="ответ"
          draggable={true}
          // onDragStart={e => dragStartHandler()}
          // onDragLeave={e =>}
        />
      ))}
      <Button onClick={(e) => addAnswer(e, indexQuestion)}>
        Добавить ответ
      </Button>
    </div>
  );
}

export default Answers;
