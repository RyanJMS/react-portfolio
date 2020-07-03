import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default function Project({
  title,
  image,
  description,
  repoLink,
  liveLink,
}) {
  return (
    <div>
      <Col sm={12} lg={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img id="img" variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button href={repoLink} variant="primary" target="_blank">
              Github Repo
            </Button>{" "}
            <Button variant="success" href={liveLink}>
              Live Demo
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
