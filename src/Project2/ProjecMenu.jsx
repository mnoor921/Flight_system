import React from "react";
import Header from "./Header1";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ProjectMenu() {
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
                <label htmlFor="">Menu</label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link to="/fMC" className="btn btn-1 side-button"></Link>
                  <Link to="/acarsp" className="btn btn-1 side-button"></Link>
                  <Link to="/dfdum" className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button mb-2"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <p className="text-center">
                    <i className="fa fa-angle-left"></i>
                    act
                    <i className="fa fa-angle-right"></i>
                  </p>
                  <div className="d-flex-1">
                    <div className="model-indent">
                      
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        fmc
                      </label>{" "}
                      <br />
                      <label htmlFor="" className="mt-3">
                        <i className="fa fa-angle-left mr-1"></i>
                        acars
                      </label>{" "}
                      <br />
                      <label htmlFor="" className="mt-3">
                        <i className="fa fa-angle-left mr-1"></i>
                        dfdmu
                      </label>{" "}
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
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
            </div>
            <Footer />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectMenu;
