import React from "react";
// import Image1 from "../assests/flight.jpg";
import Image2 from "../assests/flight2.jpg";
import Beer from "../assests/buy_bear.jpg";
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
          <Col
            md="9"
            class="main-navbar pt-5"
            style={{
              border: "1px solid silver",
              minHeight: "95vh",
              textAlign: "center",
            }}
          >
            <br />
            <div className="top-header">
              <Link
                to="/commmenu"
                className="navbar-link active mt-2"
                style={{
                  color: "#0BF8F0",
                  margin: "5px 10px",
                  fontSize: "15px",
                }}
              >
                787/777 Comm
              </Link>
              <Link
                to=""
                className="navbar-link mt-2"
                style={{ color: "#FFF", margin: "5px 10px", fontSize: "15px" }}
              >
                777 FMC
              </Link>
              <Link
                to=""
                className="navbar-link mt-2"
                style={{ color: "#FFF", margin: "5px 10px", fontSize: "15px" }}
              >
                757/767 CDU
              </Link>
              <Link
                to=""
                className="navbar-link mt-2"
                style={{ color: "#FFF", margin: "5px 10px", fontSize: "15px" }}
              >
                787 FMC
              </Link>
              <Link
                to=""
                className="navbar-link mt-2"
                style={{ color: "#FFF", margin: "5px 10px", fontSize: "15px" }}
              >
                737 FMC
              </Link>
              <Link
                to=""
                className="navbar-link mt-2"
                style={{ color: "#FFF", margin: "5px 10px", fontSize: "15px" }}
              >
                320/319 CDU
              </Link>
            </div>
            <br />
            <img src={Image2} alt="" width="100%" className="my-3" />
            <div className=" text-center mx-auto">
              <Link
                to="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
                className=" mx-auto"
              >
                <img
                  src={Beer}
                  width="120"
                  height="50"
                  className="my-2"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </Link>
            </div>
            <br />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
