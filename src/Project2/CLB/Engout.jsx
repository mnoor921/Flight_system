import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function CLb() {
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
                <label htmlFor="">eng out clb</label>
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
                  <Link className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 pos-1">
                    <div className="model-indent">
                      <p>crz alt</p>
                      <label>fl220</label>

                      <p>eng out speed</p>
                      <label>222kt</label>

                      <p>con n1</p>
                      <label>99.5%</label>
                      <br />
                      <p style={{ marginTop: "-1rem" }}>
                        {" "}
                        --------------------------------------------------------------{" "}
                      </p>
                    </div>

                    <div className="model-indent text-right">
                      <p>max alt</p>
                      <label>fl259</label>

                      <p>to t/d</p>
                      <label> .z / nm</label>

                      <p style={{ marginTop: "-1rem" }}> -------- </p>
                    </div>
                  </div>

                  <div className="d-flex-1" style={{ marginTop: "0" }}>
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        rt eng out
                      </label>{" "}
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        lt eng out
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
                  <Link className="btn btn-1 side-button ,b-2"></Link>
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

export default CLb;
