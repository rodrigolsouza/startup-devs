import "./styleHeader.css";
import React from "react";
import { useState } from "react";

export function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index: any) => {
    setActiveLink((prevActiveLink) =>
      prevActiveLink === index ? null : index
    );
  };

  return (
    <div className="page-header__row">
      <div className="logo">Logo</div>
      <nav className="main-navigation">
        <ul>
          {["Home", "Services", "Portfolio", "About", "Contact"].map(
            (section, index) => (
              <li key={index}>
                <a
                  href={`#${section}`}
                  className={`nav-link ${activeLink === index ? "active" : ""}`}
                  onClick={() => handleLinkClick(index)}
                >
                  {section}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
      <div className="cta-button">
        <button>Contato</button>
      </div>
    </div>
  );
}
