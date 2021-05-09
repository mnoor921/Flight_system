import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function DepArr() {
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
              <div className="numbering d-flex-1">
                <label htmlFor="" className="tex"></label>
                <label htmlFor="" className="tex">
                  Ksat arrivals
                </label>
                <label htmlFor="" className="tex">
                  1/3
                </label>
              </div>

              <div className="d-flex-1">
                <div className="model-indent">
                  
                  <p>stars</p>
                  <label htmlFor="">marcs8 ( sel)</label> 

                  <p>trans</p>
                  <label htmlFor="">idu (sel)</label> 


                  
                </div>

                <div className="model-indent text-right ">
                  <p>runways</p>
                  <label htmlFor="">(sel) 12r</label> 
                  <p>trans</p>
                  <label htmlFor="">csi</label> <br />
                  <label htmlFor="">sat</label> <br />
                  <label htmlFor="">stv</label> <br />
                </div>
              </div>
              <hr />

              <div className="d-flex-1">
                <div className="">
                  <Link className="btn btn-1">Erase</Link>
                </div>

                <div className="">
                  <Link className="btn btn-1">route </Link>
                  
                </div>
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

export default DepArr;
