// import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ReactChild } from "react";

export const Slider = () => {
  return (
    // <Carousel>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://bansal.ac.in/media/banner_images/Web_Banner.png"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>IGNITE A Top Institute</h3>
    //       <p>Come join us to your future</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="https://bansal.ac.in/media/banner_images/NEET_AITS.png"
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>IGNITE A Top Institute</h3>
    //       <p>Come join us to your future</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <Carousel
      showThumbs={false}
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
      showArrows={false}
    >
      <div>
        <img src="https://bansal.ac.in/media/banner_images/NEET_AITS.png" />
      </div>
      <div>
        <img src="https://bansal.ac.in/media/banner_images/Web_Banner.png" />
      </div>
    </Carousel>
  );
};
