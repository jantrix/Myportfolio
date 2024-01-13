import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
            
          </Col>

          <Col md={4} className="project-card">
           
          </Col>

          <Col md={4} className="project-card">
           
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
