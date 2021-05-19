import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DepArr() {
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
                  Dep / Arr Index
                </label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link to="/KiaDep" className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/KiaDep" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9 pos-1">
                  <br />
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        Dep
                      </label>
                    </div>
                    <label htmlFor="">Kiah</label>

                    <div className="model-indent ">
                      <label htmlFor="">
                        arr
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div className="model-indent"></div>
                    <label htmlFor="" className="ml-5">
                      ksat
                    </label>

                    <div className="model-indent ">
                      <label htmlFor="">
                        arr
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <div className="d-flex-1 mt-2">
                    <div className="">
                      <label htmlFor="" className="ml-2">
                        Dep
                      </label>
                      <p style={{ marginTop: "-1rem" }}>
                        {" "}
                        <i className="fa fa-angle-left"></i>-------{" "}
                      </p>
                    </div>
                    <label htmlFor="">Other</label>
                    <div className="">
                      <label htmlFor="" className="ml-2">
                        arr
                      </label>
                      <p style={{ marginTop: "-1rem" }}>
                        {" "}
                        ------- <i className="fa fa-angle-right"></i>{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link to="/KiahArr" className="btn btn-1 side-button"></Link>
                  <Link to="/KstArr" className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/KiahArr" className="btn btn-1 side-button"></Link>
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

export default DepArr;
