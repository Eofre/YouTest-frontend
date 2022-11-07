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
      <p style={{ color: "green" }}>Верный ответ</p>
    ) : (
      <p style={{ color: "red" }}>Неверно</p>
    );
  return (
    <div className={cl.card}>
      <img src={question.img} alt="" />
      <p className={cl.text}>Вопрос: {question.question}</p>
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
