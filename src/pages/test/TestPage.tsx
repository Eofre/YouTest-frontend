import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Conteiner from "../../components/conteiner/Conteiner";
import TestGame from "../../components/testGame/TestGame";
import TestResult from "../../components/testResult/TestResult";
import TestHome from "../../components/testHome/TestHome";
import { Question, Test } from "../../types/types";
import "./TestPage.scss";

interface TestProps {
  tests: Test[];
}

function TestPage({ tests }: TestProps) {
  const params = useParams();
  const testId = Number(params.id);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [roundTest, setRoundTest] = useState<number>(0);
  const [answersUser, setAnswersUser] = useState<number[]>([]);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
    useState<number>(0);
  function getTest(tests: Test[], id: number) {
    let test: Test = tests[0];
    tests.forEach((item) => {
      if (item.id === testId) {
        test = item;
      }
    });
    return test;
  }

  function startPassingTheTest() {
    setIsStarted(true);
    console.log("START");
  }

  function determiningTheNumberOfCorrectAnswers(indexAnswer: number) {
    if (question.currectAnswer === indexAnswer) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers + 1);
    }
  }

  function chooseAnAnswer(indexAnswer: number) {
    answersUser.push(indexAnswer);
    determiningTheNumberOfCorrectAnswers(indexAnswer);
    if (roundTest + 1 === test.questions.length) {
      setIsShowResult(true);
    } else {
      setRoundTest(roundTest + 1);
    }
  }

  function startTheTestAgain() {
    setIsShowResult(false);
    setIsStarted(false);
    setRoundTest(0);
    setAnswersUser([]);
    setNumberOfCorrectAnswers(0);
  }

  let test: Test = getTest(tests, testId);
  let question: Question = test.questions[roundTest];
  let scores: number = Math.floor(
    (numberOfCorrectAnswers / test.questions.length) * 100
  );
  let mark: string =
    scores >= 90
      ? `5 (отлично)`
      : scores >= 75
      ? `4 (хорошо)`
      : scores >= 60
      ? `3 (удовлетворительно)`
      : `2 (неудовлетворительно)`;

  return (
    <section className="test">
      <Conteiner maxWidth="870px">
        {isStarted ? (
          isShowResult ? (
            <TestResult
              scores={scores}
              mark={mark}
              test={test}
              answersUser={answersUser}
              startTheTestAgain={startTheTestAgain}
            />
          ) : (
            <TestGame question={question} chooseAnAnswer={chooseAnAnswer} />
          )
        ) : (
          <TestHome test={test} startPassingTheTest={startPassingTheTest} />
        )}
      </Conteiner>
    </section>
  );
}

export default TestPage;
