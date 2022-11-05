import React, { useState } from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import db from "./db.json";
import { Test } from "./types/types";

function App() {
  const [tests, setTests] = useState<Test[]>(db.tests);
  console.log(tests);
  return (
    <div className="App">
      <Header />
      <main>
        <AppRouter tests={tests} />
      </main>
    </div>
  );
}

export default App;
