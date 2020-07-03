import React from "react";
import { Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <div>
      <Container fluid>{props.children}</Container>
    </div>
  );
}
