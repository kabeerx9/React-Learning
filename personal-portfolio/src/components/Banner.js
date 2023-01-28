import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const toRotate = ["Web Developer", "AI/ML Enthusiast", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounce" : ""
                    }
                  >
                    <span className="tagline"> Welcome to my Portfolio</span>
                    <h1>
                      {`Hi I'm Kabeer `}
                      <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      "As a fresher, I am eager to apply my knowledge and skills
                      in front-end development to real-world projects. I have a
                      strong foundation in JavaScript and React, and I am
                      confident in my ability to learn and adapt to new
                      technologies quickly." "I have a passion for creating
                      visually appealing and user-friendly websites and I have a
                      good understanding of web development principles. I am
                      always eager to learn and stay up to date with the latest
                      technologies and best practices in front-end development."
                    </p>
                    <HashLink to="#connect">
                      <button>
                        Let's Connect
                        <ArrowRightCircle size={25} />
                      </button>
                    </HashLink>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder Img"></img>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
export default Banner;
