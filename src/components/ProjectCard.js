import { Col } from "react-bootstrap";
import navicon2 from "../assets/img/nav-icon2.svg";

const styles = {
  githubicon: {
    // position the github icon to upper right corner
    position: "absolute",
    top: 0,
    right: 0,
    // set the size
    width: "50px",
    height: "50px",
    // set the border radius to make it a circle
    borderRadius: "50%",
    backgroundColor: "#6d9886",
    margin: "10px",
    padding: "5px",
  },
};
// return the JSX for 'Project' component
// return (
// <div className="col-sm-6 col-lg-4 mb-4">
//   <div className="" style={styles.projectContainer}>
//     <a href={githubLink} rel="noreferrer" target="_blank">
//       <img src={githubIcon} alt="projectImage" style={styles.githubIcon}/>
//     </a>
//     <a href={deployLink} rel="noreferrer" target="_blank">
//       <p style={styles.projectTitle}>
//         {title}
//       </p>
//     </a>
//   </div>
// </div>
// );

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  deployurl,
  githuburl,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a style={{ color: "white" }} href={deployurl}>
          {" "}
          <img src={imgUrl} alt="portfolio" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
        <a href={githuburl} rel="noreferrer" target="_blank">
          <img src={navicon2} alt="githubicon" style={styles.githubicon} />
        </a>
      </div>
    </Col>
  );
};
