import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
const CarouselC = () => {
  return (
    <div >
      <Carousel fade controls={false} pause={false} wrap>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/1.jpg" alt="slide 1" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/2.jpg" alt="slide 2" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/3.jpg" alt="slide 3" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/4.jpg" alt="slide 4" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/5.jpg" alt="slide 5" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/6.jpg" alt="slide 6" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/7.jpg" alt="slide 7" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/8.jpg" alt="slide 8" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/9.jpg" alt="slide 9" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img className="d-block w-100" src="/images/car/10.jpg" alt="slide 10" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselC