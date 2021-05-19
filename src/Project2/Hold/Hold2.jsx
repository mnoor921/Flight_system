import React from "react";
import Header from "../Header1";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { Container, Row, Col, Form } from "react-bootstrap";

function Legs() {
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
                <label htmlFor="" className="tex">
                  act rte
                </label>
                <label htmlFor="" className="tex">
                  legs
                </label>
                <label htmlFor="" className="tex">
                  1/3
                </label>
              </div>

              <div className="row">
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link to="/Hold3" className="btn btn-1 side-button"></Link>
                </div>
                <div className="col-md-10 col-9 pos-1">
                  <div className="d-flex-1">
                    <div className="model-indent">
                      <p>252 &deg;</p>
                      <label>sealy</label>

                      <p>276 &deg;</p>
                      <label>idli</label>

                      <p>262 &deg;</p>
                      <label>crays</label>

                      <p>259 &deg;</p>
                      <label>marcs</label>

                      <p>236 &deg;</p>
                      <label>braun</label>
                    </div>

                    <div className="model-indent ">
                      <p>32nm </p>
                      <div className="text-right">
                        <label className="text-right">250 / fl192</label>
                      </div>

                      <p>33nm </p>
                      <div className="text-right">
                        <label className="text-right">250 / fl220</label>
                      </div>

                      <p>45nm </p>
                      <div className="text-right">
                        <label className="text-right">250 / fl220</label>
                      </div>

                      <p>22nm </p>
                      <div className="text-right">
                        <label className="text-right">200 / 17815</label>
                      </div>
                      <p>12nm </p>
                      <div className="text-right">
                        <label className="text-right">256 / 14012</label>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex-1" style={{ marginTop: "-1.5rem" }}>
                    <label htmlFor=""> ------------ </label>
                    <label htmlFor="">Hold at</label>
                    <label htmlFor=""> ------------ </label>
                  </div>
                  <div className="" style={{ marginTop: "-1rem" }}>
                    <label htmlFor="">
                      <input
                        type="text"
                        placeholder="[][][][][][]"
                        style={{ width: "75px" }}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-md-1 col-1 side-btn">
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
                  <Link className="btn btn-1 side-button"></Link>
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

export default Legs;
