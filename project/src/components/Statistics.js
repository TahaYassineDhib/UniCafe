import React from "react";

const Statistics = ({ good, neutral, bad }) => {
  let cond = good == 0 && bad == 0 && neutral == 0;
 
  return (
    <div>
      {cond ? (
        <h3>No feedback given</h3>
      ) : (
        <div>
          <h3>Statistics:</h3>
          <div className=" statistics">
            <div className=" stat good">
              <h5>Good:</h5>
              <p>{good}</p>
            </div>
            <div className=" stat neutral">
              <h5>Neutral:</h5>
              <p>{neutral}</p>
            </div>
            <div className=" stat bad">
              <h5>Bad:</h5>
              <p>{bad}</p>
            </div>
          </div>
          <div className=" stat average">
            <h5>Average:</h5>
            <p>{good - bad}</p>
          </div>
          <div className=" stat average positive">
            <h5>positive:</h5>
            <p>{(good / (bad + neutral + good)) * 100}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;
