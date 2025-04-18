import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ador. </span>
            Born and raised in <span className="purple"> Addis Ababa</span>, Ethiopia. And have spent my teen-age life in <b className="purple">Leiden</b>, Netherlands, blending both cultures into who I am today.
            <br />
            I'm a 3rd year software engineering student at Inholland University.
            <br />
            
            <br />
            Apart from coding, what do i enjoy?
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on side projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "A person who never made a mistake never tried anything new."
          {""}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
