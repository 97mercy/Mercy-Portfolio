import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with leveraging technology to drive 
              <i>
                <b className="purple"> business success </b>
              </i> and deliver 
              <i>
                <b className="purple"> impactful products. </b>
              </i>
              <br />
              <br />My field of interest lies in building 
              <i>
                <b className="purple"> innovative web technologies and products </b>
              </i>
              that align with business goals.
              <br />
              <br />
              I enjoy analyzing market trends, identifying opportunities, and optimizing processes to  &nbsp;
              <i>
                <b className="purple">
                improve product outcomes.
                </b>
              </i>
              <br />
              <br />
              I have a strong inclination toward bridging the gap between technical teams and business stakeholders &nbsp;
              <i>
                <b className="purple">
                to ensure strategic alignment.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I strive to develop &nbsp;
              <i>
                <b className="purple">
                  value-driven solutions  
                </b>
              </i>
              &nbsp; by focusing on customer needs and business objectives.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/97mercy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mercy-gautam/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/97vicky__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
