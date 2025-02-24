import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import RoundedRectangle from "./RoundedRectangle";

function Resume() {
  return (
    <div className="page">
      <Header />
      <div
        style={{
          height: "100vh", // Full viewport height
          width: "100%",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          backgroundColor: "##f5e8d6", // Match your site's background color
        }}
      >
        <iframe
          src="resume.pdf#toolbar=0&zoom=120"
          width="30%" // Adjust width to hide gray background
          height="90%" // Adjust height to hide gray background
          style={{
            border: "none",
            backgroundColor: "transparent",
          }}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
