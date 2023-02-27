import { Container } from "react-bootstrap";
import Logo from "../Logo/Logo";
import "./Footer.css";
import LogoImage from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container>
        <Logo image={LogoImage} />
        <p>@2022 sportographer, All rights reserved.</p>
      </Container>
    </footer>
  );
};
export default Footer;
