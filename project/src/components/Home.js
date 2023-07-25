import React, { useState } from "react";
import Buttons from "./Buttons";
import Statistics from "./Statistics";

const Home = () => {
  const handleClick = (value, func) => {
    func(value + 1);
  };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div className="home">
      <h1>UniCafe</h1>
      <h3>Give Feedback:</h3>
      <Buttons
        handleClick={handleClick}
        good={good}
        setGood={setGood}
        bad={bad}
        neutral={neutral}
        setBad={setBad}
        setNeutral={setNeutral}
      />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default Home;
