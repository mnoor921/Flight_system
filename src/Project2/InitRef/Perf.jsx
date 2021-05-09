import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Perf() {
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
                  1/2
                </label>
              </div>
              <div className="text-center">
                <label htmlFor="">act perf init</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>gw/crz/ cg</p>
                  <label>130.1/26.2%</label>
                </div>
                <div className="model-indent text-right">
                  <p>trip/crz alt</p>
                  <label>/fl220</label>
                </div>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>plan/fuel</p>
                  <label>...   /10.1</label>
                </div>
                <div className="model-indent text-right">
                  <p>crz/wind</p>
                  <label>220&deg; /10</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p> zfw</p>
                  <label>120.0</label>
                </div>
                <div className="model-indent text-right">
                  <p>t/c oat</p>
                  <label>-4&deg; f -20&deg; c</label>
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>reserves</p>
                  <label>5.0</label>
                </div>
                <div className="model-indent">
                  <p>trans alt</p>
                  <label>18000</label>
                </div>
                  
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>cost index</p>
                  <label>15</label>
                </div>
                <div className="model-indent">
                  <p>perf init</p>
                  {/* <label>18000</label> */}
                </div>
                  
              </div>

                
                
            
              
              <div className="d-flex-1">
                <Link to="" className=""></Link>
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

export default Perf;
