import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import header from "../public/assets/header.jpg";
import styled from "styled-components";

export default function Header() {
  const Styles = styled.div`
    .jumbo {
      background: src(${header}) no-repeat fixed bottom;
      background-size: cover;
      color: #ccc;
      height: 200px;
      position: relative;
      z-index: -2;
    }

    .overlay {
      background-color: #000;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
    }
  `;
  return (
    <div>
      <Styles>
        <Jumbo fluid className="jumbo">
          <div className="overlay">
            <Container>
              <h1>Ryan Schock</h1>
              <p>Full Stack Web Developer</p>
            </Container>
          </div>
        </Jumbo>
      </Styles>
    </div>
  );
}
