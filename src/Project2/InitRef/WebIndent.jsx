import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";


function WptIndent() {
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
                <label htmlFor="">ref nav data</label>
               
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>wpt indent</p>
                  <label>sealy</label>
                </div>
                
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>latitude </p>
                  <label>n29&deg; 28.0</label>
                </div>
                <div className="model-indent text-right">
                  <p>longitude</p>
                  <label>w098&deg; 24.2</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                <p>mag / var </p>
                  <label>e 8&deg;</label>
                </div>
                
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                <p>ref indent </p>
                  <label htmlFor="">-------</label>
                </div>
                <div className="model-indent text-right">
                  <p>radial / dist</p>
                  <label>125&deg;/25nm</label>
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

export default WptIndent;
