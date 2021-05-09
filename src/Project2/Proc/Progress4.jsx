import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Progress() {
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
                  4/4
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>252 &deg;</p>
                  <label htmlFor="">sealy</label>

                  <p>rnp / actual </p>
                  <label htmlFor="">1.00 / 0.05 nm</label>

                  <p>xtk error</p>
                  <label htmlFor="">r 0.96nm</label>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>rnp approach --------------------------------- </p>
                  <label htmlFor="">0.50nm</label>
                </div>

                <div className="model-indent text-right ">
                  <p>32Nm</p>
                  <label htmlFor="">.615 / fl191</label>
                </div>
              </div>
              {/* <hr /> */}

              <div className="d-flex-1">
                <div className="">
                  <Link to="/Progress3" className="btn btn-1">
                    {" "}
                    Prev
                  </Link>
                </div>

                <div className="">
                  {/* <Link to="/Progress3" className="btn btn-1">Next</Link> */}
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

export default Progress;
