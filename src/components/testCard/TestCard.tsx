import React from "react";
import cl from "./TestCard.module.scss";

interface testCardProps {
  image: string;
  title: string;
  numberOfQuestions?: number;
}

function testCard({ image, title, numberOfQuestions }: testCardProps) {
  return (
    <div className={cl.card}>
      <img className={cl.img} src={image} alt="the picture of the test" />
      <p className={cl.numberQuestions}>{numberOfQuestions}</p>
      <h4 className={cl.title}>{title}</h4>
    </div>
  );
}

export default testCard;
