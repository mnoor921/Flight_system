import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ActLeg1777() {
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
                <label htmlFor="">act econ crz</label>
                <label htmlFor="" className="tex">
                  2/3
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
                  <div className="d-flex-1">
                    <div className="">
                      <p>crz alt </p>
                      <label htmlFor="" className="bg_grey color_pink">
                        fl200
                      </label>

                      <p className=""> eo spd </p>
                      <label htmlFor="" className="bg_grey color_pink">
                        .810
                      </label>
                      <p className=""> n1 </p>
                      <label htmlFor="" className="bg_grey color_pink">
                        86.1%
                      </label>

                      <p className=""> step </p>
                      <label htmlFor="" className="bg_grey">
                        1000
                      </label>
                    </div>

                    <div className="text-right mr-0 ">
                      <p className="mt-1">step to </p>
                      <label htmlFor="" className="bg_grey">
                        {" "}
                        fl390{" "}
                      </label>

                      <p className=""> at </p>
                      <label htmlFor="">1300z/ 1512nm</label>
                      <p className=""> eta/fuel w/mod </p>
                      <label htmlFor="">1951z/ 23.6</label>
                      <div className="d-flex-1" style={{ marginTop: "-.7rem" }}>
                        <div className="mr-4">
                          <p>opt</p>
                          <label htmlFor="">fl328</label>
                        </div>
                        <div className="mr-4">
                          <p>max</p>
                          <label htmlFor="">fl329</label>
                        </div>
                        <div className="text-right">
                          <p>recnd</p>
                          <label htmlFor="">fl329</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center" style={{ marginTop: "-1.5rem" }}>
                    ----------------------------
                  </p>
                  <div className="d-flex-1" style={{ marginTop: "-.7rem" }}>
                    <div className="">
                      <p className=""> </p>
                      <label htmlFor=""></label>
                    </div>
                    <div className="text-right mr-0">
                      <p className=""> </p>
                      <label htmlFor="">
                        engout
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        rta progress
                      </label>
                    </div>
                    <div className="text-right mr-0">
                      <label htmlFor="">
                        lrc<i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
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
            <Footer next="/Des7777" prev="/ActClb1777" />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ActLeg1777;
