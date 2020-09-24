import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./style.css";

export default function Header() {
  return (
    <Jumbo className="jumbo">
      <h1>Ryan Schock</h1>
      <p>Full Stack Web Developer</p>
    </Jumbo>
  );
}
