import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import projects from "../../projects.json";

export default function Portfolio() {
  return (
    <div>
      <Row>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[0].image} />
            <Card.Body>
              <Card.Title>{projects[0].title}</Card.Title>
              <Card.Text>{projects[0].description}</Card.Text>
              <Button
                href={projects[0].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[0].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[1].image} />
            <Card.Body>
              <Card.Title>{projects[1].title}</Card.Title>
              <Card.Text>{projects[1].description}</Card.Text>
              <Button
                href={projects[1].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[1].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[2].image} />
            <Card.Body>
              <Card.Title>{projects[2].title}</Card.Title>
              <Card.Text>{projects[2].description}</Card.Text>
              <Button
                href={projects[2].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[2].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[3].image} />
            <Card.Body>
              <Card.Title>{projects[3].title}</Card.Title>
              <Card.Text>{projects[3].description}</Card.Text>
              <Button
                href={projects[3].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[3].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[4].image} />
            <Card.Body>
              <Card.Title>{projects[4].title}</Card.Title>
              <Card.Text>{projects[4].description}</Card.Text>
              <Button
                href={projects[4].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[4].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projects[5].image} />
            <Card.Body>
              <Card.Title>{projects[5].title}</Card.Title>
              <Card.Text>{projects[5].description}</Card.Text>
              <Button
                href={projects[5].repoLink}
                variant="primary"
                target="_blank"
              >
                Github Repo
              </Button>{" "}
              <Button variant="success" href={projects[5].liveLink}>
                Live Demo
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
