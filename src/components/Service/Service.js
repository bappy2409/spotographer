import { Button, Col } from "react-bootstrap";

const Service = ({ image, heading, price, text }) => {
  return (
    <Col lg={4}>
      <div className="single-service mb-4">
        <img className="w-100 mb-2" src={image} alt="" />
        <h3>{heading}</h3>
        <h5>Price: {price}</h5>
        <p>{text}</p>
        <Button variant="secondary">Secondary</Button>
      </div>
    </Col>
  );
};
export default Service;
