import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Limits() {
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
                <label htmlFor="" className="tex"></label>
                <label htmlFor="" className="tex">
                  fix info
                </label>
                <label htmlFor="" className="tex">
                  1/2
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/init"
                    className="btn btn-1 side-button mb-2"
                  ></Link>
                </div>
                <div className="col-md-10 col-10 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>fix </p>
                      <label htmlFor=""> alamd</label>
                    </div>

                    <div className="model-indent ">
                      <p>rad / dis fr</p>
                      <label htmlFor="">076 / 169</label>
                    </div>

                    <div className="model-indent text-right "></div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1rem" }}>
                    <div className="model-indent">
                      <p>rad / dis </p>
                      <label htmlFor=""> 150 / 4.0</label>
                    </div>

                    <div className="model-indent ">
                      <p>eta</p>
                      <label htmlFor="">0435.3</label>
                    </div>

                    <div className="model-indent  ">
                      <p>dtg</p>
                      <label htmlFor="">159</label>
                    </div>
                    <div className="model-indent text-right ">
                      <p>alt</p>
                      <label htmlFor="">4100</label>
                    </div>
                  </div>

                  <div className="d-flex-1">
                    <div className="model-indent">
                      <label htmlFor=""> 150 / 2.0</label>
                    </div>

                    <div className="model-indent ">
                      <label htmlFor="">0435.8</label>
                    </div>

                    <div className="model-indent  ">
                      <label htmlFor="">161</label>
                    </div>
                    <div className="model-indent text-right ">
                      <label htmlFor="">3500</label>
                    </div>
                  </div>

                  <label htmlFor="" className="mt-2">
                    ------
                  </label>
                  <br />
                  <br />
                  <label htmlFor="">
                    <i className="fa fa-angle-left mr-1"></i>
                    abm
                  </label>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button mb-2"></Link>
                </div>
              </div>

              <br />
              <br />
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Limits;
