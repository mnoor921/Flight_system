import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Legs() {
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
                  act rte
                </label>
                <label htmlFor="" className="tex">
                  legs
                </label>
                <label htmlFor="" className="tex">
                  3/3
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>124 &deg;</p>
                  <label>rw12r</label>

                  <p>124 &deg; hdg</p>
                  <label> (intc) </label>

                  <p>162 &deg;</p>
                  <label>embow</label>

                  <p>olu bt</p>
                  <label>embcw</label>

                  <p>rnp / actual -----------------</p>
                  <label>1.00 /0.05nm</label>
                </div>

                <div className="model-indent ">
                  <p>5.9nm gp 3.00&deg; </p>
                  <div className="text-right">
                    <label className="text-right">/ 867</label>
                  </div>

                  <p>4.2nm </p>
                  <div className="text-right">
                    <label className="text-right"> ------ / --------- </label>
                  </div>

                  <p>1.16nm </p>
                  <div className="text-right">
                    <label className="text-right"> ------ / 3100a </label>
                  </div>

                  <div className="text-right">
                    <label className="text-right"> ------ / -------- </label>
                  </div>
                </div>
              </div>

              <div className="d-flex-1">
                <Link to="/legs2" className="btn btn-1">
                  prev
                </Link>
                <Link></Link>
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

export default Legs;
