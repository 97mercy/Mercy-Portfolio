import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { BiBarChartAlt2 } from "react-icons/bi";
import {
  SiPostgresql,
} from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { IoLogoTableau } from "react-icons/io5";
import { FaSalesforce } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiBarChartAlt2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Line />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
      </Col>
    </Row>
  );
}

export default Techstack;
