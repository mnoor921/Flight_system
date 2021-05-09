import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function POS() {
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
                  1/3
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">pos</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p></p>
                  <label></label>
                </div>
                <div className="model-indent text-right">
                  <p>Last pos</p>
                  <label>n29 59.3 w095 21.5</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>ref airport</p>
                  <label>kiah</label>
                </div>
                <div className="model-indent text-right">
                  <p></p>
                  <label>n29 59.8 w095 20.4</label> 
                  
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gate</p>
                  <label>e22</label>
                </div>
                <div className="model-indent text-right">
                  <p></p>
                  <label>n29 59.5 w095 21.3</label> 
                  
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gmt mon / dy</p>
                  <label>0354.8z 03/22</label>
                </div>
                <div className="model-indent text-right">
                  <label>
                      <span><input type="text" placeholder="[][][]" style={{width:'50px'}} /></span>
                      <span><input type="text" placeholder="[][]" style={{width:'40px'}} /></span>.
                      <span><input type="text" placeholder="[]" style={{width:'25px'}} /></span>
                      <span><input type="text" placeholder="[][][][]" style={{width:'60px'}} /></span>
                      <span><input type="text" placeholder="[][]" style={{width:'40px'}} /></span>.
                      <span><input type="text" placeholder="[]" style={{width:'30px'}} /></span>
                  </label>
                </div>
              </div>
              <div className="d-flex-1">
                <Link to="/pos" className="btn btn-1">prev</Link>
                <Link to="/pos1" className="btn btn-1">next</Link>
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

export default POS;
