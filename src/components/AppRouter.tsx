import React from "react";
import { Route, Routes } from "react-router";
import CreateTest from "../pages/createTest/CreateTest";
import Home from "../pages/home/Home";
import TestGame from "../pages/testGame/TestGame";

interface AppRouterProps {
  tests: Array<any>;
}

function AppRouter({ tests }: AppRouterProps) {
  return (
    <Routes>
      <Route path="/" element={<Home tests={tests} />} />
      <Route path="/createTest" element={<CreateTest />} />
      <Route path="/testGame" element={<TestGame />} />
    </Routes>
  );
}

export default AppRouter;
