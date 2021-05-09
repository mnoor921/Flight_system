import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Takeoff() {
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
                <label htmlFor="">takeoff perf</label>
               
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>rw wind</p>
                  <label>----&deg;/ ---</label>
                </div>
                <div className="model-indent text-right">
                  <p>rw cond</p>
                  <label>dry/wet/sk-r</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>rw slope/hdg </p>
                  <label>--.-%/148&deg;</label>
                </div>
                <div className="model-indent text-right">
                  <p>sel oat</p>
                  <label>+30/ +25&deg; c</label>
                </div>
              </div>
              <br />
              <div className="d-flex-1">
                <div className="model-indent">
                <p>accel ht </p>
                  <label>1000agl</label>
                </div>
                <div className="model-indent text-right">
                  <p>eo accel ht</p>
                  <label>1000agl</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                <p> </p>
                  
                </div>
                <div className="model-indent text-right">
                  <p>the reduction</p>
                  <label>clb 1000agl</label>
                </div>
              </div>
              
                
                
            
              
              <div className="d-flex-1">
                <Link to="/Takeoffpp" className="btn btn-1">prev</Link>
                <Link to="/Takeoffp2" className=""></Link>
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

export default Takeoff;
