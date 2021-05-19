import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function AirportIndent() {
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
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/init" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 pos-1">
                    <div className="model-indent">
                      <p>runway indent</p>
                      <label>-------</label>
                      <p>airport indent</p>
                      <label>ksat</label>
                      <p>latitude </p>
                      <label>n29&deg; 32.0</label>

                      <br />
                      <br />
                      <br />

                      <p className="mt-2">mag / var </p>
                      <label>e 8&deg;</label>
                    </div>
                    <div className="model-indent text-right">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p>longitude</p>
                      <label>w098&deg; 28.2</label>
                      <p>elevation</p>
                      <label>809ft</label>
                    </div>
                  </div>
                  
                  <div className="d-flex-1 mt-2">
                    <label htmlFor="">
                      <i className="fa fa-angle-left mr-1"></i>
                      index
                    </label>
                    
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link  className="btn btn-1 side-button"></Link>
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

export default AirportIndent;
