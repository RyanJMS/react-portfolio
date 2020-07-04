import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Jumbo fluid className="jumbo">
        <div className="overlay">
          <Container>
            <h1>Ryan Schock</h1>
            <p>Full Stack Web Developer</p>
          </Container>
        </div>
      </Jumbo>
    </div>
  );
}
