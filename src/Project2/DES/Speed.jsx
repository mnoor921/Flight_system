import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Speed() {
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
                <label htmlFor="">econ spd des</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  <p>e / d alt </p>
                  <label>1809</label>

                  <p>tgt spd </p>
                  <label>.614 / 256</label>

                 
                </div>

                
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  <p>spd / rest </p>
                  <label htmlFor="">240 / 10000</label> 
                  
                              
                </div>
                

                <div className="model-indent text-right">

                  <p>wpt / alt  </p>
                  <label htmlFor=""> --------- / ---------- </label>
                  
                  <p>fpa  v/b  v/s  </p>
                  <label htmlFor=""> 0.0 </label>
                  

                </div>
              </div>

              <div className="d-flex-1">
                  <Link to="/forecast" className="btn btn-1">Forecast</Link>
                  <Link className="btn btn-1">erase</Link>
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

export default Speed;
