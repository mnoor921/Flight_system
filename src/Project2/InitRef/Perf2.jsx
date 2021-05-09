import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Perf2() {
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
                <label htmlFor="">act perf links</label>
                <p>time error tolerance</p>
                <label htmlFor="">30 sec at rta wpt</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>min spd</p>
                  <label>100/ .400</label>
                </div>
                <p>--clb--</p>
                <div className="model-indent text-right">
                  <p>max spd</p>
                  <label>340/.820</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p> </p>
                  <label>100/ .400</label>
                </div>
                <p>--crz--</p>
                <div className="model-indent text-right">
                  <p></p>
                  <label>340/.820</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                <p> </p>
                  <label>100/ .400</label>
                  <p> pref lim</p>
                </div>
                <p>--des--</p>
                <div className="model-indent text-right">
                  <p></p>
                  <label>340/.820</label>
                  <p> pref lim</p>
                </div>
              </div>

              
                
                
            
              
              <div className="d-flex-1">
                <Link to="/perf" className="btn btn-1">report</Link>
                <Link to="/perf2" className="btn btn-1">request</Link>
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

export default Perf2;
