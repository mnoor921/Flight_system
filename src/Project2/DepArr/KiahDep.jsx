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
                  kiah departures
                </label>
                <label htmlFor="" className="tex">
                  1/3
                </label>
              </div>
              <div className="row">
                <div className="col-md-1 side-btn">
                  <Link to="/KiaDep" className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>sids</p>
                      <label htmlFor="">aex4</label>
                      <br />
                      <br />
                      <label htmlFor="">bpt5</label>
                      <br />
                      <br />
                      <label htmlFor="">cried3</label>
                      <br />
                      <br />
                      <label htmlFor="">eld1</label>
                      <br />
                      <br />
                      <label htmlFor="">giffa3</label> <br />
                    </div>

                    <div className="model-indent text-right ">
                      <p>runways</p>
                      <label htmlFor="">
                        {" "}
                        <i className="fa fa-angle-left"></i> sel{" "}
                        <i className="fa fa-angle-right"></i> 15l
                      </label>{" "}
                      <br />
                    </div>
                  </div>
                  <hr style={{ marginTop: "-1rem" }} />
                  <div className="d-flex-1" style={{ marginTop: "-.2rem" }}>
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        Erase
                      </label>
                    </div>

                    <div className="">
                      <label htmlFor="">
                        route
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
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

export default DepArr;
