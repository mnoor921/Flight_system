import React from "react";
import Header from "../Header1";
import Footer from '../Footer'
import { Link } from "react-router-dom";
// import Footer from "./Footer";

import { Container, Row, Col, Form } from "react-bootstrap";
import { post } from "jquery";

function Navdata() {
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
                <Link to="/WptIndent" className="btn btn-1">wpt ident</Link>
                <Link to="/Navid" className="btn btn-1">navaid ident</Link>
              </div>
              <div className="d-flex-1">
              <Link to="/AirportIndent" className="btn btn-1">airport ident</Link>
                
              </div>
              <br />
              <br />
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

export default Navdata;
