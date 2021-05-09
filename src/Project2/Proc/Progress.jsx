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
                 --------------------
                </label>
                <label htmlFor="" className="tex">
                  Progress
                </label>
                <label htmlFor="" className="tex">
                  1/4
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>from</p>
                  <label htmlFor="">rw12l</label>

                  <p>253 &deg;</p>
                  <label htmlFor="">sealy</label>

                  <p>276 &deg;</p>
                  <label htmlFor="">idu</label>

                 
                  <label htmlFor="">ksat</label>

                  <p>to  t / c</p>
                  <label htmlFor="">0421z /  37nm</label>
                </div>

                <div className="model-indent text-right ">
                  <p>ata   fuel</p>
                  <label htmlFor="">z /   .</label>

                  <p>eta / fuel</p>
                  <label htmlFor="">0440z  /  8.3</label>

                  <p></p>
                  <label htmlFor="">0425z  /  7.8</label>

                  <p></p>
                  <label htmlFor="">0451z  /  6.4</label>

                  <p>fuel qty</p>
                  <label htmlFor="">9.8</label>
                </div>
              </div>
              <hr />

              <div className="d-flex-1">
                <div className="">
                  {/* <Link to="Hold2" className="btn btn-1">Next hold</Link> */}
                </div>

                <div className="">
                  <Link to="/Navstatus" className="btn btn-1">Nav status </Link>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="">
                  {/* <Link to="Hold2" className="btn btn-1"> hold</Link> */}
                </div>

                <div className="">
                  <Link to="/Progress2" className="btn btn-1">Next</Link>
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

export default Hold;
