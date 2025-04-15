import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/emojis.com young-man.png";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              I started programming in early 2021, when I joined Computer science Inholland university of applied sciences.  
              <br />
              <br />I began with <b className="purple">C#</b>, where I learned the fundamentals of programming, focusing on <b className="purple">object-oriented programming</b> principles and exploring some common <b className="purple">design patterns</b>. 
              <i>
              <br /> After that, I transitioned to <b className="purple">Java</b> and started developing full-stack web applications using <b className="purple">Spring Boot</b>, which gave me hands-on experience building robust and scalable backend systems.
              <br /> I'm conversant with Java, C#, Python, PHP, Javascript
              </i>
              <br />
              <br />
              I'm highly interested in &nbsp;
              <b className="purple">deep learning models</b> and also in areas related to{" "}
              <b className="purple">fintech</b> and <b className="purple">blockchain technologies</b>.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Java</b> and  Modern Javascript Library and Frameworks
              &nbsp;like 
              <i>
                <b className="purple"> Angular.js, React.js, and Vue.js</b>
              </i>
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
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ador1717"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ador-negash-503502250/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ador20tin/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
