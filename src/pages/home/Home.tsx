import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Conteiner from "../../components/conteiner/Conteiner";
import TestCard from "../../components/testCard/TestCard";
import { Test } from "../../types/types";
import "./Home.scss";

interface HomeProps {
  tests: Test[];
}

function Home({ tests }: HomeProps) {
  let navigate = useNavigate();
  const switchingToTheTest = (id: number) => navigate(`/test/${id}`);
  return (
    <section className="home">
      <Conteiner>
        <h2 className="home__title">Tests</h2>
        <div className="home__tests">
          {tests.map((item) => (
            <TestCard
              key={item.id}
              switchingToTheTest={switchingToTheTest}
              test={item}
            ></TestCard>
          ))}
        </div>
      </Conteiner>
    </section>
  );
}

export default Home;
