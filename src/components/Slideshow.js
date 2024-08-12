import { Carousel } from "react-bootstrap";
import slide1 from '../assets/images/sliderreal1.png'
import slide2 from '../assets/images/sliderreal2.png'
import '../style/Slider.css'

const SlideShow = () => {
  return (
    <div className="container containerslider">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default SlideShow;
