import React from "react";
// import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function CRB() {
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
                <label htmlFor="">econ crz</label>
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
                  <Link to="/lrc" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 pos-1">
                    <div className="model-indent ">
                      <div className="">
                        <p>
                          crz alt <span className="ml-4">opt/max</span>
                        </p>
                        <label>
                          fl220 <span className="ml-4">fl390 / 410</span>
                        </label>

                        <p>tgt spd </p>
                        <label>.614</label>

                        <p>turb n1</p>
                        <label>62.1 / 62.1%</label>

                        <p>fuel at kst</p>
                        <label className="ml-5">6.7</label>
                      </div>
                    </div>
                    <div className="model-indent text-right">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p>actual wind</p>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex-1" style={{ marginTop: "-1.5rem" }}>
                    <div className="">
                      <label htmlFor="">
                        
                      </label>{" "}
                      <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                       lrc
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        eng out
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>{" "}
                      <br />
                      <br />
                      <label htmlFor="">
                        rta
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
                  <Link to="/engcrz" className="btn btn-1 side-button"></Link>
                  <Link to="/rta" className="btn btn-1 side-button"></Link>
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

export default CRB;
