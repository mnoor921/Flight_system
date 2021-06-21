import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Acars() {
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
                <label htmlFor="">menu </label>
                <label htmlFor="" className="tex"></label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link
                    to="/Indent777"
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 p-3">
                    <div className=" mt-3">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        Fmc
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        Sat
                      </label>
                    </div>
                    <p>
                      <i className="fa fa-angle-left mr-1"></i>
                      act
                      <i className="fa fa-angle-right ml-1"></i>
                    </p>
                    <div className="text-right">
                      <p>efis ctl</p>
                      <label htmlFor="">
                        <span className="color_green">off</span>- - on
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      <br />
                      <p>dsp ctl</p>
                      <label htmlFor="">
                        <span className="color_green">off</span>- - on
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <label htmlFor="" className="mt-1">
                        pmdg setup
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        fc actions
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
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

export default Acars;
