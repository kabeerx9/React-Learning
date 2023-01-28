import { Col } from "react-bootstrap";

// const ProjectCard = ({ title, description, imgUrl }) => {
const ProjectCard = (props) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={props.project.imgUrl} alt="proimg" />
        <a
          href={props.links[props.project.index]}
          target="_blank"
          rel="noopener noreferrer"
          className="custom-link"
        >
          <div className="proj-txtx">
            <h4>{props.project.title}</h4>
            <span>{props.project.description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCard;
