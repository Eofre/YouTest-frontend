import React from "react";
import cl from "./QuestionForm.module.scss";
import Input from "../UI/input/Input";
import Answers from "../answers/Answers";

interface QuestionFormProps {
  question: string;
  handlerQuestion: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  indexQuestion: number;
  addAnswer: (e: React.MouseEvent<HTMLButtonElement>, index: number) => void;
  handlerAnswer: (
    e: React.ChangeEvent<HTMLInputElement>,
    indexQuestion: number,
    indexAnswer: number
  ) => void;
  answers: string[];
}

function QuestionForm({
  question,
  handlerQuestion,
  indexQuestion,
  addAnswer,
  handlerAnswer,
  answers,
}: QuestionFormProps) {
  return (
    <div className={cl.question}>
      <label>
        <Input
          type="text"
          value={question}
          onChange={(e) => handlerQuestion(e, indexQuestion)}
          placeholder={`Вопрос №${indexQuestion + 1}`}
        />
      </label>
      <Answers
        answers={answers}
        addAnswer={addAnswer}
        handlerAnswer={handlerAnswer}
        indexQuestion={indexQuestion}
      />
    </div>
  );
}

export default QuestionForm;
