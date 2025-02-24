import React from "react";
import "./App.css";

export function Footer() {
  return (
    <footer className="p-3 text-white footer">
      <div className="container">
        <div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="px-2 footer-image">
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./linkedin.png"
                  alt="LinkedIn"
                  className="footer-icon"
                />
              </a>
            </li>
            <li className="px-2 footer-image">
              <a
                href="https://github.com/your-github-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./github.png" alt="GitHub" className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
