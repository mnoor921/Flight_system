import React from "react";
import {Carousel} from 'react-bootstrap'
import Slide_1 from '../../assests/slide-1.jpg'
import Slide_2 from '../../assests/slide2.jpg'
import Slide_3 from '../../assests/slide3.jpg'

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block"
            height="600vh"
            width="100%"
            src={Slide_1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            height="600vh"
            width="100%"
            src={Slide_2}
            alt="Second slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            height="600vh"
            width="100%"
            src={Slide_3}
            alt="Third slide"
          />

         
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
