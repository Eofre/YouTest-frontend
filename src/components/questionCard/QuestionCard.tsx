import React from "react";
import cl from "./QuestionCard.module.scss";
import { Question } from "../../types/types";

interface QuestionCardProps {
  question: Question;
  answerUser: number;
}

function QuestionCard({ question, answerUser }: QuestionCardProps) {
  let correctOrIncorrectAnswer =
    question.answers[answerUser] ===
    question.answers[question.currectAnswer] ? (
      <p
        style={{
          color: "rgb(1, 176, 1)",
          textShadow: "0px 0px 10px rgb(1, 176, 1)",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        Верный ответ
      </p>
    ) : (
      <p style={{ color: "red", fontWeight: "700", fontSize: "18px" }}>
        Неверно
      </p>
    );
  return (
    <div className={cl.card}>
      <p className={cl.text}>Вопрос: {question.question}</p>
      <img src={question.img} alt="" />
      <p className={cl.text}>Вы ответили: {question.answers[answerUser]}</p>
      <p className={cl.text}>
        Правильный ответ: {question.answers[question.currectAnswer]}
      </p>
      <p className={cl.text}>Объяснение: {question.explanation}</p>
      <div className={cl.inf}>{correctOrIncorrectAnswer}</div>
    </div>
  );
}

export default QuestionCard;
