import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../images/banner-one.jpg";
import banner2 from "../../images/banner-two.jpg";
import banner3 from "../../images/banner-three.jpg";
import Button from "react-bootstrap/Button";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">Secondary</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">Secondary</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>SPOTOGRAPHER</h3>
          <h2>Sports Photographer</h2>
          <p>I Capture Sports Moments and Actions.</p>
          <Button variant="secondary">Secondary</Button>{" "}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
