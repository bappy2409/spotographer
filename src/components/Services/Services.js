import { Container, Row } from "react-bootstrap";
import "./Services.css";
import banner1 from "../../images/banner-one.jpg";
import banner2 from "../../images/banner-two.jpg";
import banner3 from "../../images/banner-three.jpg";
import Service from "../Service/Service";
import SeactionHeading from "../SectionHeading/SeactionHeading";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(services);

  return (
    <section className="services-text mb-5">
      <Container>
        <SeactionHeading heading="My Services" text="Sub Heading" />
        <Row>
          <Service
            image={banner1}
            heading="Sporting Events Photography"
            price="$300"
            text="I'm the leading sporting event photographer in Bangladesh. I offer quality images and products, on-site printing and great pricing!"
          />
          <Service
            image={banner2}
            heading="Team Picture Day Photography"
            price="$100"
            text="My live match photography is best in the world. The quality of the photos are just amazing and beautiful and ready to use for your next platform."
          />
          <Service
            image={banner3}
            heading="Live Match Photography"
            price="$150"
            text="I offers top quality posed team & individual photography services for any size team and league. You will get best team photos from me."
          />
        </Row>
      </Container>
    </section>
  );
};
export default Services;
