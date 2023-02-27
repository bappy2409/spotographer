import { Container, Row } from "react-bootstrap";
import SingleImage from "../SingleImage/SingleImage";
import ImageOne from "../../images/banner-one.jpg";
import ImageTwo from "../../images/banner-two.jpg";
import ImageThree from "../../images/banner-three.jpg";

const AllImages = () => {
  return (
    <div className="all-images">
      <Container>
        <Row>
          <SingleImage image={ImageOne} />
          <SingleImage image={ImageTwo} />
          <SingleImage image={ImageThree} />
          <SingleImage image={ImageOne} />
          <SingleImage image={ImageTwo} />
          <SingleImage image={ImageThree} />
          <SingleImage image={ImageOne} />
          <SingleImage image={ImageThree} />
          <SingleImage image={ImageThree} />
          <SingleImage image={ImageOne} />
          <SingleImage image={ImageTwo} />
          <SingleImage image={ImageThree} />
        </Row>
      </Container>
    </div>
  );
};
export default AllImages;
