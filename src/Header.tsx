import React from "react";
import "./App.css";

export function Header() {
  return (
    <header className="p-3 text-white pw-navbar">
      <div className="container">
        <div>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 header-font">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 header-font">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 header-font">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 header-font">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
