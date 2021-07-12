import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Book from "../assests/book.PNG";
import Launch from "../assests/lanch.PNG";
import DownloadImg from "../assests/download.PNG";
import Download from "../assests/download-all.PNG";
import BackBtn from "../assests/back.PNG";
import { Link } from "react-router-dom";
const trainer = () => {
  return (
    <div className=" trainier">
      <br />
      <br />
      <Container>
        <div className="d-flex-1">
          <div className="d-flex">
            <Link to="/" className="btn btn-back mr-3">
              <img src={BackBtn} alt="" />{" "}
            </Link>
            <div className="program-name">
              <img src={Book} alt="" />
              <span className="ml-2">
                A320 FMGS Trainer v2 <br />
              </span>
            </div>
          </div>
          <Link className="btn btn-back mr-3">
            <img src={Download} alt="" />{" "}
          </Link>
        </div>

        <br />
        <div className="trainer-desktop p-3">
          <div className="trainder-div p-2">
            <p>A320 FMGS Trainer v2</p>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>A320 FMGS Trainer v2</p>
            <Link to="/launch">
              Launch <img src={Launch} alt="" />
            </Link>
          </div>
          <br />
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>Introduction</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>D-Data</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>I-Init-A</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>F-fpln</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>---- init-a winds</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>--r rad-nav</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>-i init b</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
          <div className="trainder-div px-3 py-2 d-flex-1">
            <p>-p pref</p>
            <Link>
              Download <img src={DownloadImg} alt="" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default trainer;
