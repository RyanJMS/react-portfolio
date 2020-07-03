import React, { useState, useEffect } from "react";
import projects from "../../projects.json";
import Project from "../Project";
import { Row } from "react-bootstrap";

export default function Portfolio() {
  const [projectData, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects);
  }, []);
  return (
    <div>
      <Row>
        {projectData.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </Row>
    </div>
  );
}
