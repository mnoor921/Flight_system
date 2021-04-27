import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Poilet() {
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
            <Header />

            <h4 className="text-center text-white text-uppercase">
              Initialize
            </h4>

            <hr />

            <div className="m-5 text-center">
              <h4>
                Captain:{" "}
                <span>
                  <input type="text" placeholder="XXXXXXX" />
                </span>
              </h4>

              <ul className="ml-3">
                <p>Poilets:</p>

                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>{" "}
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
                <li>
                  <span>
                    <input type="checkbox" className="mx-1 mt-1" />
                  </span>
                  Employe #:{" "}
                  <span>
                    <input type="text" placeholder="XXXXX" />
                  </span>
                </li>
              </ul>
            </div>

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Poilet;
