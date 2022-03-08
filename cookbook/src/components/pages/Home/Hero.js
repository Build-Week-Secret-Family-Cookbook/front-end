import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="h_Wrapper">
      <div className="h_Section1">
        <div className="h_Picture"></div>
        <div className="h_Title">
          <h1>Hero Section </h1>
        </div>
        <div className="h_Para">
          <p>
            Every year on March 8th we celebrate International Women’s Day to
            highlight the historical, cultural, social, and political
            achievements of women.
          </p>
          <button className="button"> Learn More</button>
        </div>
      </div>
      <div className="h_Section2">
          <div className="h_picture">
            <h1> </h1>
          </div>
      </div>
    </div>
  );
}

export default Hero;
