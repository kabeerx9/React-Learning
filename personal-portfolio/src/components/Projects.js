import Nav from "react-bootstrap/Nav";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import expenseImg from "../assets/img/expense.png";
import faceMask from "../assets/img/face_mask.png";
import signLanguage from "../assets/img/sign_language2.png";
import carImg from "../assets/img/car_image.png";
const Projects = () => {
  const projects = [
    {
      title: "Face Mask Detection",
      description: "Developement",
      imgUrl: faceMask,
      index: 0,
    },
    {
      title: "Sign Language Detection",
      description: "Developement",
      imgUrl: signLanguage,
      index: 1,
    },
    {
      title: "Car Rental Website",
      description: "Design and Developement",
      imgUrl: carImg,
      index: 2,
    },
    {
      title: "Expense Tracker",
      description: "Design and Developement",
      imgUrl: expenseImg,
      index: 3,
    },
  ];

  const links = [
    "https://github.com/kabeerx9/Face_Mask_Detection",
    "https://github.com/kabeerx9/Capstone",
    "https://github.com/kabeerx9/Kabeer-Rental_car",
    "https://kabeer-expense-tracker.netlify.app/",
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Few Projects that i created which include Front-end and Deep
              Learning
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-centers"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          links={links}
                          key={index}
                          project={project}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Will be adding more soon ...
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Will be adding more soon ...
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="nibb"
      ></img>
    </section>
  );
};
export default Projects;
