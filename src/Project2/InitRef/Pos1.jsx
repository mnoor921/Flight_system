import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function POS1() {
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
              <div className="numbering text-right">
                <label htmlFor="" className="tex">
                  2/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">pos ref</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>fms pos</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                </div>
                <div className="model-indent text-right">
                  <p>gs</p>
                  <label>0kt</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>irs l</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                </div>
                <div className="model-indent text-right">
                  {/* <p>gs</p> */}
                  <label>0kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>irs r</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                </div>
                <div className="model-indent text-right">
                  {/* <p>gs</p> */}
                  <label>0kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gps l</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                  <p>gps r</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                  <p> radio</p>
                  <label>n29&deg; 59.3 w095&deg; 21.5</label>
                </div>
              </div>

              <div className="d-flex-1">
                <Link to="/pos" className="btn btn-1">
                  prev
                </Link>
                <Link to="/pos2" className="btn btn-1">
                  next
                </Link>
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

export default POS1;
