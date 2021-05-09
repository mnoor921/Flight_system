import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Hold() {
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
                  rte
                </label>
                <label htmlFor="" className="tex">
                  hold
                </label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>Fix</p>
                  <label htmlFor="">embow</label>

                  <p>quad / radial</p>
                  <label htmlFor="">s / 160 &deg;</label>

                  <p>inbd crs / dir</p>
                  <label htmlFor="">340 &deg; /r turn</label>

                  <p>leg time</p>
                  <label htmlFor="">1.0min</label>

                  <p>leg dist</p>
                  <label htmlFor="">--.-Nm</label>
                </div>

                <div className="model-indent text-right ">
                  <p>spd / tgt  alt</p>
                  <label htmlFor="">200 /   3000</label>

                  <p>fix eta</p>
                  <label htmlFor="">0.450.1z</label>

                  <p>efc time</p>
                  <label htmlFor="">0515z</label>

                  <p>hold avail</p>
                  <label htmlFor="">0+10</label>

                  <p>best speed</p>
                  <label htmlFor="">250kt</label>
                </div>
              </div>
              <hr />

              <div className="d-flex-1">
                <div className="">
                  <Link to="Hold2" className="btn btn-1">Next hold</Link>
                </div>

                {/* <div className="">
                  <Link className="btn btn-1">route </Link>
                </div> */}
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

export default Hold;
