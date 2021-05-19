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
                  mod rte
                </label>
                <label htmlFor="" className="tex">
                  hold
                </label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/Hold2" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>Fix</p>
                      <label htmlFor="">crays</label>

                      <p>quad / radial</p>
                      <label htmlFor="">e / 079 &deg;</label>

                      <p>inbd crs / dir</p>
                      <label htmlFor="">259 &deg; /r turn</label>

                      <p>leg time</p>
                      <label htmlFor="">1.5min</label>

                      <p>leg dist</p>
                      <label htmlFor="">--.-Nm</label>
                    </div>

                    <div className="model-indent text-right ">
                      <p>spd / tgt alt</p>
                      <label htmlFor="">211 / fl220</label>

                      <p>fix eta</p>
                      <label htmlFor="">0.450.1z</label>

                      <p>efc time</p>
                      <label htmlFor="">0515z</label>

                      <p>hold avail</p>
                      <label htmlFor="">0+20</label>

                      <p>best speed</p>
                      <label htmlFor="">211kt</label>
                    </div>
                  </div>
                  <hr style={{ marginTop: "-.5rem" }} />
                  <label htmlFor="">
                    <i className="fa fa-angle-left mr-1"></i>
                    next hold
                  </label>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
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
