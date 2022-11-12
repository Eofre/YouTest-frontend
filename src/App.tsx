import React, { useState } from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import db from "./db.json";
import { Test } from "./types/types";

function App() {
  const [tests, setTests] = useState<Test[]>(db.tests);
  function createTest(e: React.MouseEvent<HTMLButtonElement>, test: Test) {
    e.preventDefault();
    setTests([...tests, test]);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter tests={tests} createTest={createTest} />
      </main>
    </div>
  );
}

export default App;
