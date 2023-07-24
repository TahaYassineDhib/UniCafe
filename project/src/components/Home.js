import React from "react";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div className="home">
      <h1>UniCafe</h1>
      <h3>Give Feedback:</h3>
      <Buttons />
      <h3>Statistics:</h3>
      <div className=" statistics">
        <div className=" stat good">
          <h5>Good:</h5>
          <p>10</p>
        </div>
        <div className=" stat neutral">
          <h5>Neutral:</h5>
          <p>10</p>
        </div>
        <div className=" stat bad">
          <h5>Bad:</h5>
          <p>10</p>
        </div>
      </div>
      <div className=" stat average">
        
        <h5>Average:</h5>
        <p>33</p>
      </div>
      <div className=" stat average positive">
        
        <h5>positive:</h5>
        <p>33%</p>
      </div>
    </div>
  );
};

export default Home;
