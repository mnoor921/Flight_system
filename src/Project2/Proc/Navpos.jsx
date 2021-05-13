import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Navstatus2() {
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
                <label htmlFor="" className="tex">
                  {" "}
                </label>
                <label htmlFor="" className="tex">
                  pos shift
                </label>
                <label htmlFor="" className="tex">
                  3/3
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
                <div className="col-md-10 col-10 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>fmc - l</p>
                      <label htmlFor="">300 &deg; /0.0</label>
                    </div>

                    <div className="model-indent text-right ">
                      <p>emc - r</p>
                      <label htmlFor="">100 &deg; /0.0</label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1rem" }}>
                    <div className="model-indent">
                      <p>gps - l</p>
                      <label htmlFor="">110 &deg; /0.2</label>
                    </div>
                    <div className="model-indent">
                      <label htmlFor="">gps 2</label>
                    </div>

                    <div className="model-indent text-right ">
                      <p>gps - r</p>
                      <label htmlFor="">200 &deg; /0.1</label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1rem" }}>
                    <div className="model-indent">
                      <p>irs - l</p>
                      <label htmlFor="">120 &deg; /0.6</label>
                    </div>
                    <div className="model-indent">
                      <label htmlFor="">irs 2</label>
                    </div>

                    <div className="model-indent text-right ">
                      <p>irs - r</p>
                      <label htmlFor="">250 &deg; /0.4</label>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1.4rem" }}>
                    <div className="model-indent">
                      <p>rnp / actual </p>
                      <label htmlFor="">1.00 / 0.5nm</label>
                    </div>

                    <div className="model-indent text-right ">
                      <p>Radio</p>
                      <label htmlFor="">250 /0.0</label>
                    </div>
                  </div>
                  <hr style={{ marginTop: "-1rem" }} />
                  <div className="d-flex-1">
                    <div className=""></div>
                    <label htmlFor="">
                      Nav status
                      <i className="fa fa-angle-right ml-1"></i>
                    </label>
                  </div>

                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        index
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                    to="/Navstatus"
                    className="btn btn-1 side-button"
                  ></Link>
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

export default Navstatus2;
