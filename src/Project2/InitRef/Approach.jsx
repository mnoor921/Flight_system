import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Approach() {
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
                  1/1
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">Approach perf</label>
               
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gross wt</p>
                  <label>129.9</label>
                </div>
                <div className="model-indent text-right">
                  <p>flaps</p>
                  <label>15&deg;</label>
                </div>
                <div className="model-indent text-right">
                  <p>vrff</p>
                  <label>147kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  {/* <p>gross wt</p>
                  <label>129.9</label> */}
                </div>
                <div className="model-indent text-right">
                  {/* <p>flaps</p> */}
                  <label>30&deg;</label>
                </div>
                <div className="model-indent text-right">
                  {/* <p>vrff</p> */}
                  <label>140kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>ksat12r</p>
                  <label>8500ft2591m</label>
                </div>
                <div className="model-indent text-right">
                  {/* <p>flaps</p> */}
                  <label>40&deg;</label>
                </div>
                <div className="model-indent text-right">
                  {/* <p>vrff</p> */}
                  <label>133kt</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>ils 12r/crs </p>
                  <label>110.90iant/124&deg;</label>
                </div>
                <div className="model-indent text-right">
                  <p>flap/spd</p>
                  <label>---/----</label>
                  <p>wind corr</p>
                  <label>+05kt</label>
                </div>
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

export default Approach;
