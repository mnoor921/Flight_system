import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Path() {
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
                <label htmlFor="">lrc crz</label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent d-flex">
                  <div className="">
                    <p>crz alt</p>
                    <label>fl220</label>
                  </div>

                  <div className=" ml-3">
                    <p>opt / max</p>
                    <label>fl385/ 410</label>
                  </div>
                </div>

                <div className="model-indent text-right">
                  
                </div>
              </div>
              <div className="d-flex-1">
                <div className="model-indent">
                  
                    <p>tgt  spd </p>
                    <label>.607</label>
                  

                 
                    <p>turb n1</p>
                    <label>62.1 / 62.1%</label>
                  
                 
                    <p>fuel at kst</p>
                    <label>6.7</label>
                  
                </div>

                <div className="model-indent text-right">
                    <p>actual wind</p>
                  
                </div>
              </div>
              <div className="d-flex-1">
              <Link className=""></Link>
                <Link to="/Engout" className="btn btn-1">eng out</Link>
                
              </div>
              <div className="d-flex-1">
                <Link  className="">
                  
                </Link>
                <Link to="/rta" className="btn btn-1">
                  rta
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

export default Path;
