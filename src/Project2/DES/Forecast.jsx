import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Forecast() {
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
                <label htmlFor="">act des forecast</label>
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
                  <Link className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>trans lvl </p>
                      <label>fl 118</label>

                      <p>cabin rate </p>
                      <label>57fpm</label>
                    </div>

                    <div className="model-indent text-right">
                      <p>tai on / off </p>
                      <label> ------- / --------- </label>

                      <p>isa dev/qnh </p>
                      <label> --- &deg; c/30.05</label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div
                      className="model-indent"
                      style={{ marginTop: "-1.3rem" }}
                    >
                      <p>alt </p>
                      <label htmlFor="">fl220</label>
                      <br />
                      <br />
                      <label htmlFor="">fl118</label>
                      <br />
                      <br />
                      <label htmlFor="">fl124</label>
                      <p>des wind</p>
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        request
                      </label>
                    </div>
                    <div
                      className="model-indent"
                      style={{ marginTop: "-1.3rem" }}
                    >
                      <p className="text-center">-- wind --------</p>
                      <label></label>
                    </div>

                    <div
                      className="model-indent text-right"
                      style={{ marginTop: "-1.3rem" }}
                    >
                      <p>dir / spd </p>
                      <label htmlFor="">220/12kt</label>
                      <br />
                      <br />
                      <label htmlFor="">210/15kt</label>
                      <br />
                      <br />
                      <label htmlFor="">215/10kt</label> <br />
                    </div>
                  </div>
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

              <Footer />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Forecast;
