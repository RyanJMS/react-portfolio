import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/skills"
          className={
            location.pathname === "/skills" ? "nav-link active" : "nav-link"
          }
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
    </ul>
  );
}
