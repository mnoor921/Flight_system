import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ReDispatch() {
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
              reDispatch message
            </h4>

            <hr />
            <br />
            <br />

            <div className="mx-5 mt-3 text-center">
              <form action="">
                <div className="d-flex " style={{justifyContent:'center'}}>
                <input type="radio" name="muhRadio" value=""/>
                  <label htmlFor="" style={{marginLeft:'20px', marginTop:'-5px'}}>Accept</label>
                </div>
                <div className="d-flex mt-3" style={{justifyContent:'center'}}>
                <input type="radio" name="muhRadio" value=""/>
                  <label htmlFor="" style={{marginLeft:'20px', marginTop:'-5px'}}>Reject</label>
                </div>

                <Row>
                    <Col></Col>
                    <Col md={6} xs={12}>
                        <textarea name="" className="form-control mt-3" ></textarea>
                    </Col>
                    <Col></Col>
                </Row>

              </form>
            </div>

            <br />

            <br />
            <br />

            <Footer />
            <div className="bg-dark w-100" style={{ height: "40px" }}></div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReDispatch;
