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
  questionImg: string;
}

function QuestionForm({
  questionImg,
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
      <label>
        Картинка вопроса
        {/* {test.img === "" ? (
              <img className="create-test__icon" src={noPhoto} alt="" />
            ) : (
              <img className="create-test__img" src={test.img} alt="" />
            )} */}
        <img className="create-test__img" src={questionImg} alt="" />
        <input
          className="create-test__file"
          type="file"
          accept="image/jpeg,image/png"
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
