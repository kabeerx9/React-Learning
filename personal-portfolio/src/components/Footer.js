import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kabeer-joshi-7173061aa/">
                <img src={navIcon1} />
              </a>
              <a href="https://github.com/kabeerx9">
                <img src={navIcon2} />
              </a>
              <a href="https://www.instagram.com/kabeerjoshi/">
                <img src={navIcon3} />
              </a>
            </div>
            <p>CopyRight 2023, All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
