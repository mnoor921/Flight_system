import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Speed() {
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
                <label htmlFor="">econ spd des</label>
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
                  <Link to="/forecast" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 pos-1">
                    <div className="model-indent">
                      <p>e / d alt </p>
                      <label>1809</label>

                      <p>tgt spd </p>
                      <label>.614 / 256</label>

                      <p>spd / rest </p>
                      <label htmlFor="">240 / 10000</label>
                    </div>
                    <div className="model-indent text-right">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <p>wpt / alt </p>
                      <label htmlFor=""> --------- / ---------- </label>

                      <p>fpa v/b v/s </p>
                      <label htmlFor=""> 0.0 </label>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        Forecast
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        erase
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/Engout" className="btn btn-1 side-button"></Link>
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

export default Speed;
