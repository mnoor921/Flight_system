import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function RequestRoute() {
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
                <label htmlFor="">Requeest co route</label>
                <label htmlFor="" className="tex"></label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link to="/Route777" className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                      <p className="mt-4"></p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>777 (14){" "}
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>generic{" "}
                      </label>
                      <br />
                      <br />
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left mr-1"></i>ngx (1){" "}
                      </label>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>

                    <div className="text-right"></div>
                  </div>
                  <p className="text-center" style={{ marginTop: "-2rem" }}>
                    ---------------------------------------
                  </p>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        return
                      </label>
                    </div>
                    <div className="text-right"></div>
                  </div>
                </div>
                <div className="d-flex"></div>
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

export default RequestRoute;
