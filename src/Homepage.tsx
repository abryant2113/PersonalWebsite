import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import RoundedRectangle from "./RoundedRectangle";

function Homepage() {
  return (
    <div className="page">
      <Header />
      <div className="vertical-filler"></div>
      <div className="center-item">
        <RoundedRectangle
          width="30%"
          height="100%"
          borderRadius={10}
          backgroundColor="#bcc0d6"
        >
          <div className="blurb-text">
            <h1 className="intro-header">
              Austin Bryant <br /> <br />
            </h1>
            <p className="intro-subtext">
              Experienced Software Engineer with six+ years of expertise
              designing and delivering scalable, production-grade cloud
              solutions.
            </p>
          </div>
        </RoundedRectangle>
      </div>
      <div className="bottom-vertical-filler"></div>
      <Footer />
    </div>
  );
}

export default Homepage;
