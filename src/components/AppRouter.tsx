import React from "react";
import { Route, Routes } from "react-router";
import CreateTest from "../pages/createTest/CreateTest";
import Home from "../pages/home/Home";
import TestPage from "../pages/test/TestPage";
import { Test } from "../types/types";

interface AppRouterProps {
  tests: Test[];
}

function AppRouter({ tests }: AppRouterProps) {
  return (
    <Routes>
      <Route index path="/" element={<Home tests={tests} />} />
      <Route index path="/createTest" element={<CreateTest />} />
      <Route index path="/test/:id" element={<TestPage tests={tests} />} />
    </Routes>
  );
}

export default AppRouter;
