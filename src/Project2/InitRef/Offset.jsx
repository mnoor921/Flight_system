import React from "react";
import Header from "../Header1";
import Footer from '../Footer'
import { Link } from "react-router-dom";
// import Footer from "./Footer";

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
                <label htmlFor="">lateral offset</label>
               
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>offset dist</p>
                  <label>----.--</label>
                </div>
                </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
                
                
            
              
              
              
              
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
