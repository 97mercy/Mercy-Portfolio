import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Mercy Gautam </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing bachelors of Technology at IIT Dhanbad.
            <br />
            I have built my skills in business analysis and product management.
            <br />
            <br />
            Apart from my professional interests, I love engaging in activities such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
