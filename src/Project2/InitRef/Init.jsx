import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";
// import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Init() {
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
                <label htmlFor="">init / ref index</label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 side-btn">
                  <Link to="/indent" className="btn btn-1 side-button"></Link>
                  <Link to="/pos" className="btn btn-1 side-button"></Link>
                  <Link to="/perf" className="btn btn-1 side-button"></Link>
                  <Link
                    to="/Takeoffpp"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link to="/Approach" className="btn btn-1 side-button"></Link>
                  <Link to="/Offset" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10">
                  <div className="d-flex-1">
                    <div className="">
                      <p> </p>
                      <label htmlFor="" className="mt-4">
                        <i class="fa fa-angle-left mr-2"></i>Indent
                      </label>
                    </div>

                    <label htmlFor="" className="mt-4">
                      nav data
                      <i class="fa fa-angle-right ml-2"></i>
                    </label>
                  </div>
                  <div className="d-flex-1">
                    <label htmlFor="" className="mt-1">
                      <i class="fa fa-angle-left mr-2"></i>pos
                    </label>
                  </div>
                  <div className="d-flex-1">
                    <label htmlFor="" className="mt-1">
                      <i class="fa fa-angle-left mr-2"></i>perf
                    </label>
                  </div>
                  <div className="d-flex-1">
                  <label htmlFor="" className="mt-1">
                      <i class="fa fa-angle-left mr-2"></i>takeoff
                    </label>
                  </div>
                  <div className="d-flex-1">
                  <label htmlFor="" className="mt-1">
                      <i class="fa fa-angle-left mr-2"></i>approach
                    </label>
                  </div>
                  <div className="d-flex-1">
                  <label htmlFor="" className="mt-1">
                      <i class="fa fa-angle-left mr-2"></i>offset
                    </label>
                    <label htmlFor="" className="">
                     maint
                     <i class="fa fa-angle-right ml-2"></i>
                    </label>
                  </div>
                </div>
                <div className="col-md-1 side-btn">
                  <Link to="/navdata" className="btn btn-1 side-button"></Link>
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

export default Init;
