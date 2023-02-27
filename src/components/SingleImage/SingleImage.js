import { Col } from "react-bootstrap";
import "./SingleImage.css";
const SingleImage = ({ image }) => {
  return (
    <Col lg={3}>
      <div className="single-image">
        <img src={image} alt="" />
      </div>
    </Col>
  );
};
export default SingleImage;
