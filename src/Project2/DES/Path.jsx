import React from "react";
import Header from "../Header1";
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
                <label htmlFor="">Econ path des</label>
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
                      <p>e/d alt</p>
                      <label>867</label>

                      <p>tgt / spd </p>
                      <label>.615 / 256</label>

                      <p>spd / rest </p>
                      <label>.240 / 1000</label>
                    </div>

                    <div className="model-indent text-right">
                      <p>at hasood </p>
                      <label>193 / 3200a</label>

                      <p>to t/d </p>
                      <label>0531.4z / 117nm</label>

                      <p>wpt / alt </p>
                      <label>Hasdo / 3200</label>

                      <p>fba v/b v/s </p>
                      <label>0.0 </label>
                    </div>
                  </div>
                  <p className="text-center">--------------------------</p>

                  <div className="d-flex-1" style={{ marginTop: "-.8rem" }}>
                    <div className="">
                      <label htmlFor=""></label> <br />
                      <br />
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        forecast
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        speed
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>{" "}
                      <br />
                      <br />
                      <label htmlFor="">
                        des now
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
                  <Link to="/speed" className="btn btn-1 side-button"></Link>
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
