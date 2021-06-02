import React from "react";
import { Link } from "react-router-dom";
import Beer from "../assests/buy_bear.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Project3Footer = () => {
  return (
    <div>
      <div className="project3footer">
        <div className="d-flex-1 ">
          <ul>
            <li>
              <Link to="/InitRefP3" className="btn btn-1">
                init ref
              </Link>
              <Link to="/RteP3act2" className="btn btn-1">
                rte
              </Link>
              <Link to="/DepArrP3" className="btn btn-1">
                dep/arr
              </Link>
              <Link to="/Altn1" className="btn btn-1">
                altn
              </Link>
              <Link to="/Vnav" className="btn btn-1">
                vnav
              </Link>
            </li>
          </ul>
          <div className="">
            <Link className="btn btn-1">Exec</Link>
          </div>
        </div>
        <div className="d-flex-1  margin-top">
          <ul>
            <li>
              <Link to="/FixInfoP3" className="btn btn-1">
                fix
              </Link>
              <Link to="/Rte1Hold" className="btn btn-1">
                legs
              </Link>
              <Link to="/Rte1Hold1" className="btn btn-1">
                hold
              </Link>
              <Link to="/CommP3" className="btn btn-1">
                fmc/comm
              </Link>
              <Link to="/ProgressP3" className="btn btn-1">
                prog
              </Link>
            </li>
          </ul>
          <Link className=""></Link>
        </div>

        <div className="d-flex-1 margin-top">
          <ul>
            <li>
              <Link to="/NavRad" className="btn btn-1">
                nav rad
              </Link>
              <Link to="/offsetp3" className="btn btn-1">
                ofst
              </Link>
              <Link to="/ProgressP32" className="btn btn-1">rta</Link>
            </li>
          </ul>
          <div className="">
            <Link className="btn btn-1">prev Page</Link>
            <Link className="btn btn-1">next Page</Link>
          </div>
        </div>
        <Link to="/" className="btn btn-1">
          back to home
        </Link>

        <div className=" text-center mx-auto mt-2">
          <label htmlFor="">
            if you find this site helpful, <br /> i won't say no to a beer
          </label>{" "}
          <br />
          <a
            href="https://www.paypal.com/donate?hosted_button_id=YQTWBX2LGLV4S"
            className=" mx-auto"
          >
            <img
              src={Beer}
              width="120"
              height="50"
              className="my-1"
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project3Footer;
