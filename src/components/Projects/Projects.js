import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import excel from "../../Assets/Projects/Excel.png"
import crypto from "../../Assets/Projects/Crypto.png"
import reliance from "../../Assets/Projects/reliance.png"
import walmart from "../../Assets/Projects/walmart.png"
import aegon from "../../Assets/Projects/aegon.png"
import gullak from "../../Assets/Projects/gullak.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryto-Dashboard"
              description="Real-time visualization of stocks, crypto-currencies and ETLs."
              ghLink="https://github.com/97mercy/Crypto-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reliance}
              isBlog={false}
              title="Reliance Dashboard"
              description="Visualization of two years' sales data for Reliance Stores in India to provide insights into performance trends and support strategic decision-making."
              ghLink="https://github.com/97mercy/Reliance-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walmart}
              isBlog={false}
              title="Walmart Sales Dashboard"
              description="A Power BI sales dashboard for Walmart to provide real-time insights and support data-driven decisions."
              ghLink="https://github.com/97mercy/Walmart-Sales-Dashboard"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={excel}
              isBlog={false}
              title="Superstore Sales Performance and Analytics Dashboard"
              description="An Excel dashboard to analyze superstore sales trends, product performance, and customer behavior. The goal is to provide actionable insights through visualizations to drive business growth"
              ghLink="https://github.com/97mercy/SSPA-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aegon}
              isBlog={false}
              title="Aegon Life Case Study"
              description="Developed a seamless WhatsApp-based user journey for purchasing insurance and making premium payments, enhancing customer convenience and digital experience."
              ghLink="https://github.com/97mercy/Aegon-Life-Case-Study"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gullak}
              isBlog={false}
              title="Gullak App Case Study"
              description="Optimized the Gullak app to boost transaction volume by analyzing user behavior and implementing data-driven improvements to enhance engagement and financial activity."
              ghLink="https://github.com/97mercy/Gullak-App-Case-Study"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
