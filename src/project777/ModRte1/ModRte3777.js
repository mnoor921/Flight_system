import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function ActLeg1777() {
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
                <label htmlFor=""></label>
                <label htmlFor=""><span className="bg_grey">MOD</span> rte 1 legs</label>
                <label htmlFor="" className="tex">
                  2/6
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 mb-2 side-button"></Link>
                </div>
                <div className="col-md-10 col-9">
                  <div className="d-flex-1 ">
                    <div className=" ">
                    <p className="">217&deg;</p>
                      <label htmlFor="" >
                       balen
                      </label>
                      <p className="">216&deg;</p>
                      <label htmlFor="">canol</label>
                      <p className="">215&deg;</p>
                      <label htmlFor="">santa</label>
                      <p className="">215&deg;</p>
                      <label htmlFor="">quigg</label>
                      <p className="">214&deg;</p>
                      <label htmlFor="">passa</label>
                    </div>

                    <div className="text-right">
          
            
                      <p className="text-left">501nm</p>
                      <label htmlFor="">-----/---------</label>
                      <p className="text-left">500nm</p>
                      <label htmlFor="">-----/---------</label>
                      <p className="text-left">488nm</p>
                      <label htmlFor="">------/----------</label>
                      <p className="text-left">502nm</p>
                      <label htmlFor="">------/----------</label>
                      <p className="text-left">501nm</p>
                      <label htmlFor="">------/----------</label>
                     
                    </div>
                  </div>

                  <p className="text-center" style={{ marginTop: "-1.3rem" }}>
                    ---------------------------------------
                  </p>
                  <div className="d-flex-1">
                    <div className="">
                      <label htmlFor="">
                        <i className="fa fa-angle-left mr-1"></i>
                        rte 2 legs
                      </label>
                    </div>
                    <div className="text-right">
                      <label htmlFor="">
                        rte data
                        <i className="fa fa-angle-right ml-1"></i>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex"></div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link
                   
                    className="btn btn-1 side-button"
                  ></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/Rte1Data777" className="btn btn-1 side-button mb-2"></Link>
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

export default ActLeg1777;
