import React, { FC, useState } from "react";
import "./CreateTest.scss";
import Conteiner from "../../components/conteiner/Conteiner";
import QuestionForm from "../../components/questionForm/QuestionForm";
import Button from "../../components/UI/button/Button";
import Input from "../../components/UI/input/Input";
import { Question, Test } from "../../types/types";
// import noPhoto from "../../assets/images/camera.svg";

interface CreateTestProps {
  createTest: (e: React.MouseEvent<HTMLButtonElement>, test: Test) => void;
}

const CreateTest: FC<CreateTestProps> = ({ createTest }) => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "",
      answers: ["", ""],
      currectAnswer: 0,
      explanation: "",
      img: "",
    },
  ]);
  const [test, setTest] = useState<Test>({
    id: Date.now(),
    title: "",
    description: "",
    img: "",
    questions: questions,
  });
  let copyTest = Object.assign([], test);
  const fileReaderTest = new FileReader();

  function addQuestion(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    questions.push({
      question: "",
      answers: ["", ""],
      currectAnswer: 0,
      explanation: "",
      img: "",
    });
    setQuestions(questions);
    copyTest.questions = questions;
    setTest(copyTest);
  }
  function addAnswer(
    e: React.MouseEvent<HTMLButtonElement>,
    indexQuestion: number
  ) {
    e.preventDefault();
    copyTest.questions[indexQuestion].answers.push("");
    setTest(copyTest);
  }
  function handlerQuestion(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    copyTest.questions[index].question = e.target.value;
    setTest(copyTest);
  }
  function handlerAnswer(
    e: React.ChangeEvent<HTMLInputElement>,
    indexQuestion: number,
    indexAnswer: number
  ) {
    copyTest.questions[indexQuestion].answers[indexAnswer] = e.target.value;
    setTest(copyTest);
  }
  fileReaderTest.onloadend = () => {
    setTest({ ...test, img: String(fileReaderTest.result) });
  };
  // function onImgSelectedTest(e: any) {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   fileReaderTest.readAsDataURL(file);
  // }

  return (
    <section className="create-test">
      <Conteiner maxWidth="800px">
        <h2>Данные теста</h2>
        <form className="create-test__form">
          <label className="create-test__label">
            Название
            <Input
              type="text"
              value={test.title}
              onChange={(e) => setTest({ ...test, title: e.target.value })}
              placeholder="Название"
            />
          </label>
          <label className="create-test__label">
            Описание
            <textarea
              className="create-test__description"
              value={test.description}
              onChange={(e) =>
                setTest({ ...test, description: e.target.value })
              }
              placeholder="Описание"
            ></textarea>
          </label>
          {/* <label className="create-test__label create-test__label-file">
            Обложка теста
            {test.img === "" ? (
              <img className="create-test__icon" src={noPhoto} alt="" />
            ) : (
              <img className="create-test__img" src={test.img} alt="" />
            )}
            <input
              className="create-test__file"
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => onImgSelectedTest(e)}
            />
          </label> */}
          <div className="create-test__questions">
            {test.questions.map((question, index) => (
              <QuestionForm
                key={index}
                question={copyTest.questions[index].question}
                handlerQuestion={handlerQuestion}
                indexQuestion={index}
                addAnswer={addAnswer}
                handlerAnswer={handlerAnswer}
                answers={copyTest.questions[index].answers}
                questionImg={copyTest.questions[index].img}
              />
            ))}
            <Button onClick={(e) => addQuestion(e)}>Добавить вопрос</Button>
          </div>
          <Button onClick={(e) => createTest(e, test)}>Создать тест</Button>
        </form>
      </Conteiner>
    </section>
  );
};

export default CreateTest;
