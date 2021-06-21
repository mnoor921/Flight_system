import React from "react";
import Header from "./Header1";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Index() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col
            md="8"
            className="p-4"
            style={{ border: "1px solid silver", minHeight: "95vh" }}
          >
            
            <div className="main-section p-2"></div>
            <Footer/>


          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
