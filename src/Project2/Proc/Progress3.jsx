import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Progress3() {
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
              <div className="numbering d-flex-1">
                <label htmlFor="" className="tex">
                  {" "}
                  --------------------
                </label>
                <label htmlFor="" className="tex">
                  Progress
                </label>
                <label htmlFor="" className="tex">
                  3/4
                </label>
              </div>

              <div className="d-flex-1">
                <div className="">
                  <label htmlFor="">rta wpt</label>
                  <p>---------</p>
                </div>
              </div>
              {/* <hr /> */}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Link className="btn btn-1">Limits</Link>

              <div className="d-flex-1">
                <div className="">
                  <Link to="/Progress2" className="btn btn-1">
                    Prev
                  </Link>
                </div>

                <div className="">
                  <Link to="/Progress4" className="btn btn-1">
                    Next
                  </Link>
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

export default Progress3;
