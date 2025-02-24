import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import RoundedRectangle from "./RoundedRectangle";

function About() {
  return (
    <div className="page">
      <Header />
      <div className="vertical-filler"></div>
      <div className="center-item">
        <RoundedRectangle
          width="50%"
          height="auto" // Use "auto" to allow the height to adjust based on content
          borderRadius={10}
          backgroundColor="#bcc0d6"
        >
          <div className="blurb-text">
            <h1 className="intro-header">
              Hi there! <br /> <br />
            </h1>
            <p className="intro-subtext">
              I’m a Senior Software Engineer at Amazon with a lifelong passion
              for software development. My expertise lies in backend
              development, but I’ve also built frontend applications and delved
              into the embedded space, crafting Linux device drivers and HAL
              code for Amazon Echo products.
              <br />
              <br />
              When I’m not coding, you’ll find me running trails in my hometown
              of Austin, Texas, hiking mountains, diving into a good book, or
              exploring virtual worlds in video games. Speaking of which, my
              guilty pleasure is Runescape—it’s actually what sparked my
              interest in programming at a young age!
              <br />
              <br />
              Whether it’s solving complex technical challenges or leveling up
              in my favorite game, I’m always eager to learn, grow, and create.
              Let’s connect and build something amazing together!
            </p>
          </div>
        </RoundedRectangle>
      </div>
      <div className="bottom-vertical-filler"></div>
      <Footer />
    </div>
  );
}

export default About;
