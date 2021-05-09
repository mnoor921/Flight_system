import React from "react";
import Header from "./Header1";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ProjectMenu() {
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
            <div className="main-section p-2">
              <div className="numbering text-right">
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">Menu</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <Link to="/fMC" className="btn btn-1 mt-1">
                    fmc
                  </Link>{" "}
                  <br />
                  <Link to="/acarsp" className="btn btn-1 mt-1">
                    acars
                  </Link>{" "}
                  <br />
                  <Link to="/dfdum" className="btn btn-1 mt-1">
                    dfdmu
                  </Link>{" "}
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectMenu;
