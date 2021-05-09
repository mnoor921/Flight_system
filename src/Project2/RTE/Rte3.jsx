import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Rte3() {
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
                  3/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">act rte</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>via</p>
                  <label>missed apprch</label>
                  <p> -------- </p>
                </div>
                <div className="model-indent text-right">
                  <p>to</p>
                  <label>embow</label>

                  <p> ------------ </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <div className="d-flex-1">
                <Link to="/Rte2" className="btn btn-1">
                  {" "}
                  prev{" "}
                </Link>
                {/* <Link to="/Rte3" className="btn btn-1">Next</Link> */}
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

export default Rte3;
