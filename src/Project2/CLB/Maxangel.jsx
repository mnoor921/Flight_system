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
                <label htmlFor="">max angle clb</label>
                <label htmlFor="" className="tex">
                  1/1
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/Crz" className="btn btn-1 side-button"></Link>
                  <Link to="/maxrate" className="btn btn-1 side-button"></Link>
                  <Link  className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-1">
                  <div className="d-flex-1">
                    <div className="">
                      <p>crz alt</p>
                      <label>fl220</label>

                      <p>tgt / sro</p>
                      <label>230 / .780</label>

                      <p>spd / rest</p>
                      <label>250 / 10000</label>
                      <br />
                      <p style={{ marginTop: "-1rem" }}> -------- </p>

                      <label htmlFor="" className="mt-3">
                        <i className="fa fa-angle-left mr-1"></i>
                        econ
                      </label>
                    </div>

                    <div className="model-indent text-right">
                      <br />
                      <br />

                      <p className="mt-2">to fl220</p>
                      <label>0408.6z/ 31nm</label>
                      <br />
                      <br />

                      <p className="mt-4">clb n1</p>
                      <label> 92.4/ 92.4% </label>

                      <p style={{ marginTop: "-1rem" }}> -------- </p>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-.8rem" }}>
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        max rate
                      </label>{" "}
                      <br />
                      <br />
                      {/* <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        max angle
                      </label> */}
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

export default CLb;
