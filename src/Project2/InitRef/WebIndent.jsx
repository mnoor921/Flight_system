import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function WptIndent() {
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
                <label htmlFor="">ref nav data</label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/init" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10">
                  <div className="d-flex-1 pos-1">
                    <div className="model-indent">
                      <p>wpt indent</p>
                      <label>sealy</label>

                      <br />
                      <br />
                      <br />

                      <p className="mt-1">latitude </p>
                      <label>n29&deg; 28.0</label>

                      <p>mag / var </p>
                      <label>e 8&deg;</label>

                      <p>ref indent </p>
                      <label htmlFor="">-------</label>
                    </div>
                    <div className="model-indent text-right">
                      <br />
                      <br />
                      <br />
                      <br />
                      <p className="mt-3">longitude</p>
                      <label>w098&deg; 24.2</label>

                      <br />
                      <br />
                      <br />

                      <p>radial / dist</p>
                      <label>125&deg;/25nm</label>
                    </div>
                  </div>

                  <div className="d-flex-1 mt-2">
                    <label htmlFor="">
                      <i className="fa fa-angle-left mr-1"></i>
                      index
                    </label>
                  </div>
                </div>
                <div className="col-md-1 side-btn">
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

export default WptIndent;
