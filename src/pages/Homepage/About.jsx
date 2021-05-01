import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="my-5">
        <h2 className="text-center about-heading text-dark">About Us</h2>
        <hr className="text-center w-25 mx-auto" />
        <br />
        <Row>
          <Col></Col>
          <Col md={7} xs={12}>
            <p className="text-justify ">
              These trainers were developed with the pilot in transition
              training in mind. However, these are also useful to the line
              pilot. Most companies do not provide additional resources for
              their employees to use outside of the work environment. As
              instructors we’ve seen the struggles and frustrations up close and
              personal. We hear you! We’ve taken the initiative to try and
              correct this and give you the tools to practice away from your
              company.{" "}
            </p>
            <p>
              Bear in mind, these are not simulators, they are box navigation
              aides. They help you navigate the various menu pages of our more
              complicated systems. You cannot input items into the screens.
            </p>
            <p>
              That being said, please enjoy and give feedback so we can update
              and or correct things as needed. Tell your friends at other
              airlines. Help get the word out through forums, social media and
              word of mouth. This is completely free to use and our gift to all
              those frustrated pilots out there.
            </p>
            <p>
              <strong>Disclaimer:.</strong>
              We are not endorsed or affiliated with any airline.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <p></p>
      </Container>
    </div>
  );
};

export default About;
