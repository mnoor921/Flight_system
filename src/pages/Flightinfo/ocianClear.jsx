import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function OcianClear() {
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
              oceanic Clearance request
            </h4>

            <hr />
            
            
            <form action="">
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right">Flt number:</label>
                    <input type="text" placeholder="UAL 427" className="mx-2"/>
                </div>
                <br/>
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right">atc facility:</label>
                    <input type="text" placeholder="[] [] [] [] " className="mx-2" style={{width:'50px'}}/>
                </div>
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right"> entry point:</label>
                    <input type="text" placeholder="[] [] [] [] [][][][][] " className="mx-2" style={{width:'120px'}}/>
                </div>
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right"> flight level:</label>
                    <input type="text" placeholder="[] [] [] []" className="mx-2" style={{width:'70px'}}/>
                </div>
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right"> eta:</label>
                    <input type="text" placeholder="[] [] []" className="mx-2" style={{width:'70px'}}/> z
                </div>
                <div className="d-flex mt-2">
                    <label htmlFor="" className="w-25 text-right">match:</label>
                    <input type="text" placeholder="[] [] [] []" className="mx-2" style={{width:'90px'}}/>
                </div>
                

                <br/>
                <div className="d-flex w-100 mt-2">
                <div className="d-flex ">
                  <label htmlFor="" className="ml-3">
                    free text:
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols="40"
                    rows="3"
                    className="ml-3"
                    placeholder="------------"
                  ></textarea>
                </div>
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

export default OcianClear;
