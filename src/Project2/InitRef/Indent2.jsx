import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Indent2() {
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
                  2/2
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">indent</label>
              </div>

              <div className="">
                <div className="model-indent">
                  <p>perf defaults</p>
                  <label>555565-p</label>
                </div>
                <div className="model-indent">
                  <p>sw options</p>
                  <label>bcg-005-72</label>
                </div>
                <div className="model-indent">
                  <p>datalink confiq</p>
                  <label>default06d</label>
                </div>
                <div className="model-indent">
                  <p>model engine data</p>
                  <label>bcg-014-a2</label>
                </div>
              </div>

              <div className="d-flex-1">
                <Link to="/indent" className="btn btn-1">prev</Link>
                <Link to="/indent2" className="btn btn-1">next</Link>
              </div>
             
              
            </div>
            <Footer/>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Indent2;
