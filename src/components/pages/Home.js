import React from "react";
import ContactBox from "../ContactBox";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./style.css";

export default function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <p>
                Welcome! My name is Ryan Schock, I am a Full Stack Web Developer
                interested in creating accessible, responsive applications.
                Excels at adapting to new environments, and thrives in
                situations that demand efficient problem solving.
              </p>
              <p></p>
              <ContactBox />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                alt="profilePic"
                id="profile"
                src="assets/images/git.jpg"
              />
              <Card.Body>
                <Card.Text>Mobile: 613-866-0322</Card.Text>
                <Card.Text>Email: jukkasc2@gmail.com</Card.Text>
                <Card.Text>Github: https://github.com/RyanJMS</Card.Text>
                <Card.Text>
                  Linkedin:{" "}
                  <a
                    href="https://www.linkedin.com/in/ryanjmschock/"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/ryanjmschock/
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
