import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Twip() {
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
            <Header />

            <h4 className="text-center text-white text-uppercase">
              atis request
            </h4>

            <hr />
            
            
            <form action="">
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right">airport:</label>
                    <input type="text" placeholder="KIAD" className="mx-2"/>
                </div>
                <br/>
                
                <div className="d-flex mt-2">
                    <input type="radio"/>
                    <label htmlFor="" className="ml-3">single request</label>
                </div>
                <div className="d-flex mt-2">
                    <input type="radio"/>
                    <label htmlFor="" className="ml-3"> automatic update</label>
                </div>
                <div className="d-flex mt-2">
                    <input type="radio"/>
                    <label htmlFor="" className="ml-3">terminate  automatic   update</label>
                </div>
                
            </form>

           

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Twip;
