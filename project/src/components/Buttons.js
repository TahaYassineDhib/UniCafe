import React from "react";

const Buttons = ({
  handleClick,
  good,
  setGood,
  neutral,
  setNeutral,
  bad,
  setBad,
}) => {
  return (
    <div className="Buttons">
      <button
        onClick={() => {
          handleClick(good, setGood);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          handleClick(neutral, setNeutral);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          handleClick(bad, setBad);
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default Buttons;
