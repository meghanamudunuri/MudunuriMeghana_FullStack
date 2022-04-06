import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import jew from './jew.jpeg'

export default function App() {
return (
	<Carousel className="App-carousal" >
        <Carousel.Item interval={1000} className="slide">
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/a/ac/OnePlus_7.png"
              alt="Image One"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000} className="slide">
            <img
              className="d-block w-100"
              src={jew}
              alt="Image Two"
            />
          </Carousel.Item>
        </Carousel>
);
}
