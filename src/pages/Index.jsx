import React from "react";
// import Image1 from "../assests/flight.jpg";
import Image2 from "../assests/flight2.jpg";

import Navbar1 from './Homepage/Navbar'
import Slider from './Homepage/Slider'
import About from './Homepage/About'
import Contact from './Homepage/Contact'
import Footer from './Homepage/Footer'
import Header from "./Header";
import { Link } from "react-router-dom";
// import Footer from './Footer'

import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";

function Index() {
  return (
    <div style={{background:'#fff',color:'#000'}}>
      <Navbar1></Navbar1>
      <Slider/>
      <About/>
      <Contact/>
      <hr/>
      <Footer/>




      
    </div>
  );
}

export default Index;
