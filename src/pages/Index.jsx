import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";

function Index() {
  return (
    <div>
      <Container className="my-3">
        <Row>
          <Col></Col>
          <Col md="6" style={{ border: "1px solid silver", minHeight: "95vh" }}>
            <Accordion className="mt-5">
              <Card>
                <Card.Header className="text-center">
                  <Accordion.Toggle className="btn btn-1 text-center mx-auto" eventKey="0">
                    All Menus
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row>
                      <Col>
                        <Link to="/commmenu" className="btn btn-1 w-100 mt-2">
                          787/777 Comm
                        </Link>
                        <Link to="" className="btn btn-1 w-100 mt-2">
                        777 FMC
                        </Link>
                        <Link to="" className="btn btn-1 w-100 mt-2">
                        757/767 CDU
                        </Link>
                      </Col>
                      <Col>
                        <Link to="" className="btn btn-1 w-100 mt-2">
                          787 FMC
                        </Link>
                        <Link to="" className="btn btn-1 w-100 mt-2">
                        737 FMC
                        </Link>
                        <Link to="" className="btn btn-1 w-100 mt-2">
                        320/319 CDU
                        </Link>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
