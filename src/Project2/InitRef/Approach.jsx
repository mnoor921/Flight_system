import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Approach() {
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
                <label htmlFor=""></label>
                <label htmlFor="">Approach perf</label>
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
                  <Link to="/init" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>gross wt</p>
                      <label>129.9</label>
                    </div>
                    <div className="model-indent text-right">
                      <p>flaps</p>
                      <label>15&deg;</label>
                    </div>
                    <div className="model-indent text-right">
                      <p>vrff</p>
                      <label>147kt</label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div className="model-indent"></div>
                    <div className="model-indent text-right">
                      {/* <p>flaps</p> */}
                      <label className="ml-5">30&deg;</label>
                    </div>
                    <div className="model-indent text-right">
                      {/* <p>vrff</p> */}
                      <label>140kt</label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div
                      className="model-indent"
                      style={{ marginTop: "-1rem" }}
                    >
                      <p>ksat12r</p>
                      <label>8500ft2591m</label>

                      <p>ils 12r/crs </p>
                      <label>110.90iant/124&deg;</label>
                    </div>
                    <div className="model-indent text-right">
                      {/* <p>flaps</p> */}
                      <label>40&deg;</label>
                    </div>
                    <div className="model-indent text-right mt-1">
                      {/* <p>vrff</p> */}
                      <label>133kt</label>

                      <p>flap/spd</p>
                      <label>---/----</label>
                      <p>wind corr</p>
                      <label>+05kt</label>
                    </div>
                  </div>
                  <label htmlFor="" className="mt-3">
                    <i className="fa fa-angle-left mr-1"></i>
                    index
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

export default Approach;
