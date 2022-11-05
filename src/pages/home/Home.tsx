import React, { useState } from "react";
import Conteiner from "../../components/conteiner/Conteiner";
import TestCard from "../../components/testCard/TestCard";
import "./Home.scss";

interface HomeProps {
  tests: Array<any>;
}

function Home({ tests }: HomeProps) {
  return (
    <section className="home">
      <Conteiner>
        <h2 className="home__title">Tests</h2>
        <div className="home__tests">
          {tests.map((item) => (
            <TestCard
              key={item.id}
              image={item.img}
              title={item.title}
            ></TestCard>
          ))}
        </div>
      </Conteiner>
    </section>
  );
}

export default Home;
