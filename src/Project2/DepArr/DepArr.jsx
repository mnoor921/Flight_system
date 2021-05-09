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

              <div className="d-flex-1">
                <div className="model-indent">
                  <Link to="/KiaDep" className="btn btn-1">Dep</Link>
                </div>
                <label htmlFor="">Kiah</label>

                <div className="model-indent ">
                  <Link to="/KiahArr" className="btn btn-1">arr</Link>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent"></div>
                <label htmlFor="" className="ml-5">ksat</label>

                <div className="model-indent ">
                  <Link to="/KstArr" className="btn btn-1">arr</Link>
                </div>
              </div>
              <br />
              <br />
              <br />

              <div className="d-flex-1">
                <div className="">
                  <Link to="/DepArr" className="btn btn-1">
                    Dep
                  </Link>
                  <p> ------- </p>
                </div>
                <label htmlFor="">Other</label>
                <div className="">
                  <Link to="/DepArr" className="btn btn-1">
                    arr
                  </Link>
                  <p> ------- </p>
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
