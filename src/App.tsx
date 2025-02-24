import React from "react";
import Homepage from "./Homepage";
import About from "./About";
import Resume from "./Resume";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Catch-all route for 404s */}
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <Homepage />;
}

function AboutPage() {
  return <About />;
}

function ResumePage() {
  return <Resume />;
}

function NotFound() {
  return <h1>404 Not Found.</h1>;
}

export default App;
